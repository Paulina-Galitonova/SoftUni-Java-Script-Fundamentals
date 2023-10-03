function dungeonestDark(dungeonsRoom) {

    let initialHealth = 100;
    let totalHHealth = initialHealth;
    let totalCoins = 0;
    //Each room contains - an item or a monster; and a number. They are separated by a single space.
    //("item/monster number").
    //["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]


    let inputArray = dungeonsRoom;
    let inputString = inputArray[0];
    let elementsArray = inputString.split(('|'));
    let isCompleated=false;

    for (let i = 0; i < elementsArray.length; i++) {
        
        let currentRoom = elementsArray[i];
        let splitWords = currentRoom.split((' '));

        //•	If the first part is "potion": 
        //o	You are healed with the number in the second part. However, your health cannot exceed your initial health (100). 
        //o	Print: `You healed for {healing-number} hp.`
        //o	After that, print your current health: `Current health: {number} hp.`


        if (splitWords[0] == "potion") {
            curentHealth = Number(splitWords[1]);
            totalHHealth+=curentHealth;
            if (totalHHealth > 100) {
               diff =totalHHealth-100;
               curentHealth -=diff;
               totalHHealth=100;
             
            } 
           
            
            console.log(`You healed for ${curentHealth} hp.`);
            console.log(`Current health: ${totalHHealth} hp.`)

            // //•	If the first part is "chest": 
            // o	You have found some coins, the number in the second part. 
            // o	Print: `You found {coins} coins.`


        } else if (splitWords[0] == "chest") {
            currentCoins = splitWords[1];
            totalCoins += Number(currentCoins);
            console.log(`You found ${currentCoins} coins.`);

            // •	In any other case, you are facing a monster, you are going to fight. 
            // // The second part of the room contains the attack of the monster,
            //  and the first the monster's name. You should remove the monster's attack from your health. 


        } else {
            currentAttack = splitWords[1];
            totalHHealth -= currentAttack;
            currentMonster = splitWords[0];
            //o	If you are not dead (health > 0) you have slain the monster, and you should print: 
            // `You slayed {monster-name}.`

            // /o	If you have died, print: `You died! Killed by {monster-name}.` and your quest is over. 
            //Print the best room you`ve to manage to reach: `Best room: {room}`.
            if (totalHHealth > 0) {
                console.log(`You slayed ${currentMonster}.`);
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }
        if (i +1 >= elementsArray.length){
            isCompleated=true;
        }


    }




    //•	If you managed to go through all the rooms in the dungeon, print on the next three lines: 
    // "You've made it!"
    // "Coins: {coins}"
    // "Health: {health}"

if (isCompleated){
    console.log("You've made it!");
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${totalHHealth}`);

}




}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);