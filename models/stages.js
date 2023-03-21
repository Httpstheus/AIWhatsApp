
var stages = {
    0: {
        descricao: "Boas vindas",
        obj: require("../stages/stage0"),
    },

    1: {
        descricao: "Vendas",
        obj: require("../stages/stage1"),
    },

    2: {
        descricao: "Resumo",
        obj: require("../stages/stage2"),
    },

    3: {
        descricao: "Endereço",
        obj: require("../stages/stage3"),
    },

    4: {
        descricao: "Encerramento",
        obj: require("../stages/stage4"),
    },

    5: {
        descricao: "Forma de Pagamento",
        obj: require("../stages/stage5"),
    },
};

exports.step = stages;