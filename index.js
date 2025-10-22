const express = require("express"); 
const app = express(); 

app.get("/loja", function(req,res){
    res.send("<h1> Bem vindo a loja </h1>")
})

app.get("/camisas", function(req,res){
    res.send("<h1> Setor de camisas </h1>")
})

app.get("/calcas", function(req,res){
    res.send("<h1> setor de calsas")
})

app.get("/cadastro", function(req,res){
    var cpf = req.query["cpf"]
    
    if(cpf){
        res.send("cpf cadastrado: cpf = " +cpf)
    }else{
        res.send("Cpf não fornecido")
    }

})




app.listen(process.env.PORT ?? 3000,function(erro){  
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})