// const banco = require("../models/banco");
// const stages = require("../models/stages");

// function execute(user,msg){

//     if(msg ===`*`){
//         banco.db[user].stage = 0;
//             return [`Pedido Cancelado com Sucesso`];
//     }

//     if(msg ===`#`){
//         banco.db[user].stage = 4;
        
//             return stages.step[4].obj.execute(user,``);
//     }

//     return [
//         `Confirmar o endereço da entrega: \n ${msg}`, ```Digite # para continuar```
//         ];
    

    
// }

// exports.execute = execute;

const { db } = require("../models/banco");
const { step } = require("../models/stages");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 5;

        return step[5].obj.execute(user, "");
    }
    return [
        "```Digite # para continuar ou * para cancelar```",
        `Confirma endereco de entrega : \n ${msg}`,
    ];
}

exports.execute = execute;