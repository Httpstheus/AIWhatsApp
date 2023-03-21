// const cardapio = require("../cardapio");
// const banco = require("../banco");

// function execute(user,msg){

//     let menu = "Cardápio \n\n";

//     Object.keys(cardapio.menu).forEach((value)=>{
//         let element = cardapio.menu[value];
//         menu += `${value} - ${element.descricao}    R$ ${element.preco} \n`;
//     })

//     banco.db[user].stage = 1;

//     return ["Olá, sou um assistente virtual", menu];
// }

// exports.execute = execute;

const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");


function execute(user, msg, contato) {

    // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }


    let menu = " CARDAPIO \n\n";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${value} - ${element.description}        R$ ${element.price} \n`;
    });

    db[user].stage = 1;

    return [
        menu,
        `${time} ${contato} sou uma assistente virtual, irei apresentar o carpádio, para fazer o pedido basta enviar o codigo do produto`,
    ];
}

exports.execute = execute;