// const banco = require("../models/banco");


// function execute(user,msg){

    
//     if(msg ===`*`){
//         banco.db[user].stage = 0;
//             return [`Pedido Cancelado com Sucesso`];
//     }

//     if(msg ===`#`){
//         banco.db[user].stage = 3;
//             return [`Estamos fechando seu pedido, ok?`]
//     }


//     let resumo = ` RESUMO `;
//     let total = 0;
//     banco.db[user].itens.forEach((value)=> {
//         resumo += `${value.descricao}---- ${value.preco} \n`;

//         total += value.preco;
//     });

//     return [resumo, `O total é ${total}`, `Para confirmar digite # ou para cancelar digite * `]
// }

// exports.execute = execute;   

const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 3;
        return ["Digite o endereço por favor :"];
    }

    let resumo = "  RESUMO DO PEDIDO \n";
    let total = 0;
    db[user].itens.forEach((value) => {
        console.log(value);
        resumo += `${value.description} ----------------  ${value.price} \n`;

        total += value.price;
    });

    resumo += "-------------------------\n";
    resumo += ` Total R$ ${total}`;

    return [
        "Para confirmar digite # ou para cancelar digite * ",
        resumo,
    ];
}

exports.execute = execute;