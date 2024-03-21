const token = require("../util/token.js");
const usuarioModel = require("../models/usuarioModel");

exports.entrar=async(nick)=>{
    console.log(nick);
    let resp = await usuarioModel.registrarUsuario(nick);
    if(resp.insertedId){
        return {
            "idUser":resp.insertedId,
            "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ''),nick),
            "nick":nick}
    }
}

let buscarUsuario = async (idUser)=>{
    let user = await db.findOne("usuarios",idUser);
    return user;
}


let alterarUsuario = async (user)=>{
  return await db.updateOne("usuarios", user,{_id:user._id});
}
