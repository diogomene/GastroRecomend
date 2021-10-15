const fs = require('fs')
const foodsData = fs.readFileSync('./assets/foods.json')
const foods = JSON.parse(foodsData)

function processRequirements(requirements){
    let max = 0;
    const cardapio={}
    while(max<3){
        if(requirements.carboidrato && requirements.proteina && requirements.lipid && requirements.kcal){
            foods.forEach(food => {
                if(food.carboidrato<requirements.carboidrato && food.proteina<requirements.proteina
                    && food.lipid<requirements.lipid && food.kcal<requirements.kcal){
                    requirements.carboidrato-=food.carboidrato
                    requirements.proteina-=food.proteina
                    requirements.lipid-=food.lipid
                    requirements.kcal-=food.kcal
                    if(cardapio[food.nome]){
                        cardapio[food.nome].quantidade++
                    }else{
                        cardapio[food.nome]={quantidade:1}
                    }
                }
            });
            if(requirements.carboidrato>10 || requirements.proteina>10 || requirements.lipid>10 || requirements.kcal>10){
               max++; 
            }else{
                max=4
            }
        }
        else{
            console.log("Deu ruim")
            max=4
        }
    }
    console.log(foods.length)
    return cardapio
}

module.exports=processRequirements
