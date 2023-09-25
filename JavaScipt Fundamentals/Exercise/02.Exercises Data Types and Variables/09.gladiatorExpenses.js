function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {



    //As a gladiator, Peter has to repair his broken equipment when he loses a fight. 
    // His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count. 
    //•	Every second lost game, his helmet is broken.
    //Every third lost game, his sword is broken.
    //•	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
    //•	Every second time, when his shield brakes, his armor also needs to be repaired. 
    //You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment. 

    //•	As output you must print Peter`s total expenses for new equipment rounded to the second decimal point: "Gladiator expenses: {expenses} aureus"
    //	Allowed working time / memory: 100ms / 16MB.

    let totalExpenses = 0;
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    let shieldTotalBrakesCount = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 == 0) {
            helmetCount++;


        }
        if (i % 3 == 0) {
            swordCount++;
        }
        if (i % 2 == 0 & i % 3 == 0) {

            shieldCount++;
            shieldTotalBrakesCount++;
        }



        if (shieldTotalBrakesCount % 2 == 0 & shieldTotalBrakesCount > 0) {
            armorCount++;
            shieldTotalBrakesCount=0;
        }
    }

    totalExpenses = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);


}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );