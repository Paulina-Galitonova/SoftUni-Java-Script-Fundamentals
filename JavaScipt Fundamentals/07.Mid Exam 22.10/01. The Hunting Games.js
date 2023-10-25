function huntingGames(input) {

    let days = Number(input.shift());
    let countPlayers = Number(input.shift());
    let totalEnergy = Number(input.shift());
    let water = Number(input.shift());
    let food = Number(input.shift());
    let totalWater = days * countPlayers * water;
    let totalFood = days * countPlayers * food;
    let isEnough=true;




    for (let i = 1; i <= days; i++) {
        let energy = Number(input.shift());
        totalEnergy -= energy;

        if (totalEnergy <= 0) {
            isEnough=false;
            break;
        }

        if (i % 2 == 0) {
            let waterToDrink = 0.3 * totalWater;
            totalWater -= waterToDrink;
            totalEnergy *= 1.05;
        }

        if (i % 3 == 0) {
            let foodToEat = totalFood / countPlayers;
            totalFood -= foodToEat;
            totalEnergy *= 1.10;

        }



    }

    if(isEnough){
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`)
    } else{
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }



}

// huntingGames(["10",
//     "7",
//     "5035.5",
//     "11.3",
//     "7.2",
//     "942.3",
//     "500.57",
//     "520.68",
//     "540.87",
//     "505.99",
//     "630.3",
//     "784.20",
//     "321.21",
//     "456.8",
//     "330"]);

huntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])
;
