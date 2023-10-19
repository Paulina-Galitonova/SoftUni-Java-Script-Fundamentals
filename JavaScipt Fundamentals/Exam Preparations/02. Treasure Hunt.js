function treasureHunt(input) {

    let initialTreasureLoot = input.shift().split("|");


    for (let command of input) {
        let tokens = command.split(" ");

        if (tokens[0] == "Loot") {
            for (let i = 1; i < tokens.length; i++) {
                if (!initialTreasureLoot.includes(tokens[i])) {
                    initialTreasureLoot.unshift(tokens[i]);
                }

            }

        }
        else if (tokens[0] == "Drop") {
            index = Number(tokens[1]);
            if (index >= 0 && index < initialTreasureLoot.length) {
                let el = initialTreasureLoot[index];
                initialTreasureLoot.splice(index, 1);
                initialTreasureLoot.push(el);
            } else {
                continue;
            }




        }
        else if (tokens[0] == "Steal") {
            let count = Number(tokens[1]);
            let stolen = [];

            count = Math.min(count, initialTreasureLoot.length);

            for (let i = 0; i < count; i++) {
                let stolenItem  = initialTreasureLoot.pop();
                stolen.unshift(stolenItem);

            }
            console.log(stolen.join(", "));


        }
        else if (tokens[0] == "Yohoho!") {
            break;

        }
    }

    let sumItemsLenght = 0;
    let count = initialTreasureLoot.length;

    for (let item of initialTreasureLoot) {
        sumItemsLenght += item.length;
    }

    let average = sumItemsLenght / count;

    if (initialTreasureLoot.length == 0) {
        console.log("Failed treasure hunt.")

    } else {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)

    }

}



// treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"])
// );

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);