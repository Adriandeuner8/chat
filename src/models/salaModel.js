const db = require("./db");
const { ObjectId } = require('mongodb');

let listarSalas = async ()=>{
    let salas= await db.findAll("salas");
    return salas;
};

let buscarSala = async (idsala)=>{
    return db.findOne("salas",idsala);
};
 
let atualizarMensagens=async (sala)=>{
    return await db.updateOne("salas", sala,{_id:sala._id});
  }
  
let buscarMensagens = async (idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    console.log(sala);
    if(sala.msgs){
      let msgs=[];
      sala.msgs.forEach((msg)=>{
        if(msg.timestamp >= timestamp){
          msgs.push(msg);
        }
      });
      return msgs;
    }
  return [];
}

let verificarUsuarioNaSala = async (idUser, idSala) => {
  const sala = await db.findOne("salas", idSala);
  if (!sala) {
    throw new Error("Sala não encontrada.");
  }
  return sala.usuario.includes(idUser);
};

let removerUsuarioDaSala = async (idUser, idSala) => {
  const result = await db.updateOne("salas", { $pull: { usuario: idUser } }, { _id: idSala });  
  if (result == 1) {
    return true; 
  } else {
    return false; 
  }
};



module.exports = {listarSalas, buscarSala, atualizarMensagens, buscarMensagens, verificarUsuarioNaSala, removerUsuarioDaSala};