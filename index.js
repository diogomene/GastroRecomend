const processor = require('./processing')

const requirements = {
    carboidrato: 480,
    proteina: 160,
    lipid: 80,
    kcal: 3500
}

const cardapio = processor(requirements)

console.log(cardapio)