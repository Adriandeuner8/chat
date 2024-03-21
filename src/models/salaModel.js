const db = require("./db");

let listarSalas = async ()=>{
    let salas= await db.findAll("salas");
    return salas;
};

let buscarSala = async (idsala)=>{
    return db.findOne("salas",idsala);
};
  


module.exports = {listarSalas, buscarSala};