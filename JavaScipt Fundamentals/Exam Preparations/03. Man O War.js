function manOnWar(arr) {

    let pirate = arr.shift().split(">").map(Number);
    let warship = arr.shift().split(">").map(Number);
    let maxHealth = Number(arr.shift());
    let isLost=false;


    for (commands of arr) {
        let tokens = commands.split(" ");


        if (tokens[0] == "Fire") {
            index = Number(tokens[1]);
            damage = Number(tokens[2]);
            if (index >= 0 && index < warship.length) {
                damageOnShip = warship[index] - damage;
                warship[index] = damageOnShip;
                if (warship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    isLost=true;
                    break;
                }

            } else {
                continue;
            }

        }
        else if (tokens[0] == "Defend") {
            startIndex = Number(tokens[1]);
            endIndex = Number(tokens[2]);
            damage = Number(tokens[3]);
            if ((startIndex, endIndex >= 0) && (startIndex, endIndex < pirate.length)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirate[i] = pirate[i] - damage;
                    if (pirate[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        isLost=true;
                        break;
                    }

                }

            } else {
                continue;
            }

        }
        else if (tokens[0] == "Repair") {
            index = Number(tokens[1]);
            health = Number(tokens[2]);
            if (index >= 0 && index < warship.length) {
                pirate[index] = pirate[index] + health;
                if (pirate[index] > maxHealth) {
                    pirate[index] = maxHealth;
                }

            } else {
                continue;
            }

        }
        else if (tokens[0] == "Status") {
            let criticHealth = maxHealth * 0.20;
            let count = 0;

            for (let section of pirate) {
                if (section < criticHealth) {
                    count++;
                }

            }
            console.log(`${count} sections need repair.`)

        }
        else {
            let sumPirates = 0;
            let sumwarship = 0;

            for (let sectionP of pirate) {
                sumPirates += sectionP;
            }

            for (let sectionW of warship) {
                sumwarship += sectionW;
            }

            console.log(`Pirate ship status: ${sumPirates}`);
            console.log(`Warship status: ${sumwarship}`);



        }
    if(isLost){
        break;
    }    


    }



}

// manOnWar((["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"])
// );

manOnWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);