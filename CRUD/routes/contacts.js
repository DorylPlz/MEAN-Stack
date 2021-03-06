const express = require("express");
const router = express.Router();

const Contact = require("../database/models/contacts")

//Obtener data
router.get("/", (req, res, next) => {
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
})

//Crear contacto
router.post("/",(req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: "Fallo al crear contacto", error: err});
        }else{
            res.json({msg: "Contacto creado exitosamente"});
        }
    })
})

//borrar contacto
router.delete("/:id",(req, res, next) => {
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;