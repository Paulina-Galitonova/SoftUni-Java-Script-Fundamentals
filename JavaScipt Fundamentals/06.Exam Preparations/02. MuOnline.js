function muOnline(input) {

    let initialHealth = 100;
    let totalHHealth = initialHealth;
    let bitcoins = 0;
    let dungeonRooms = input.split("|");
    let levelCount = 0;
    let isManaged = true;



    for (let commands of dungeonRooms) {
        levelCount++;
        let tokens = commands.split(" ");
        let command = tokens[0];

        if (command == "potion") {
            let currentHealth = Number(tokens[1]);
            totalHHealth += currentHealth;

            if (totalHHealth > 100) {
                diff = totalHHealth - 100;
                currentHealth -= diff;
                totalHHealth = 100;
            }
            console.log(`You healed for ${currentHealth} hp.`);
            console.log(`Current health: ${totalHHealth} hp.`);


        }

        else if (command == "chest") {
            currentBitcoins = Number(tokens[1]);
            bitcoins += currentBitcoins;
            console.log(`You found ${currentBitcoins} bitcoins.`);

        }

        else {
            currentAttack = Number(tokens[1]);
            monsterName = tokens[0];
            totalHHealth -= currentAttack;

            if (totalHHealth > 0) {
                console.log(`You slayed ${monsterName}.`)
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${levelCount}`);
                isManaged = false;
                break;
            }

        }


    }
    if (isManaged) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${totalHHealth}`)

    }

}


// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
