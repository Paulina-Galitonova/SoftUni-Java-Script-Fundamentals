function pirates(input) {

    let command = input.shift();

    let targets = {};

    while (command !== "Sail") {
        let tokens = command.split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (city in targets) {
            targets[city].population += population;
            targets[city].gold += gold;

        } else {
            targets[city] = { population, gold };


        }
        command = input.shift();
    }


    command = input.shift();
    while (command !== "End") {
        let tokens = command.split("=>");
        let action = tokens.shift();


        if (action == "Plunder") {
            let town = tokens.shift();
            let people = Number(tokens.shift());
            let gold = Number(tokens.shift());


            targets[town].population = targets[town].population - people;
            targets[town].gold = targets[town].gold - gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`); 4

            if (targets[town].population <= 0 || targets[town].gold <= 0) {
                delete targets[town]
                console.log(`${town} has been wiped off the map!`)
            }
        } else if (action == "Prosper") {
            let town = tokens.shift();
            let gold = Number(tokens.shift());
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                targets[town].gold = targets[town].gold + gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`)
            }



        }

        command = input.shift();
    }
    let numberOfItems = Object.keys(targets).length;

    if (targets) {
        console.log(`Ahoy, Captain! There are ${numberOfItems} wealthy settlements to go to`);

        for (let town in targets) {
            let { population, gold } = targets[town];
            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);

        }


    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")

    }



}

// pirates((["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
// );

pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
)