var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const port = 1996;

app.listen(port,()=>{
    console.log("Servidor iniciado en el puerto "+port);
});

const route = require("./routes/route");
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/contactlist");

mongoose.connection.on("connected",()=>{
    console.log("Conectado a MongoDB en el puerto 27017");
})
mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("error al conectar a MongoDB");
        console.log(err);
    }

})

app.use("/api", route);

app.get('/',(req, res)=>{
    res.send("foobar");
});