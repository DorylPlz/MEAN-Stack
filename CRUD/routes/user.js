const express = require("express");
const router = express.Router();

const User = require("../database/models/user")

//login
router.post("/login",(req, res, next) => {
    creds = {
        username: req.body.username,
        password: req.body.password
    }
    User.findOne(creds, function(err, user){
        if(err || user == null){
            res.json({status: false, message: "Usuario inexistente"});
        }else{
            res.json({status: true, message: "Usuario encontrado"});
        } 
    })
})

//Registro
router.post("/register",(req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        type: req.body.type
    });

    User.findOne({username: req.body.username}, function(err, user){
        if(user == null){
            newUser.save((err, user)=>{
                if(err){
                    res.json({status: false, message: "Ocurrio un error "+err});
                }else{
                    res.json({status: true, message: "Usuario creado "});
                }
            })
        }else{
            res.json({status: false, message: "El usuario ya existe"});
        } 
    })

    
})

module.exports = router;