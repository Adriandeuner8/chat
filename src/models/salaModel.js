const db = require("./db");
function listarSalas() {
    return db.findALL("salas");
}

module.exports = {listarSalas};

function listarSalas() {
    return [
        {
            "_id": {
                "$oid": "12345678910"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "publica"
        },
        {
            "_id": {
                "$oid": "10987654321"
            },
            "nome": "Só os Bonitos da InfoCimol",
            "tipo": "privada",
            "chave": "lindos"
        },
        {
            "_id": {
                "$oid": "1a2b3c4d5e6f7g8h9i10j"
            },
            "nome": "InfoCimol",
            "tipo": "publica"
        }
    ];
}

/*
exports.get=()=>{
    let salaModel = require('../models/salaModel');
    return salaModel.listarSalas();
}
*/
