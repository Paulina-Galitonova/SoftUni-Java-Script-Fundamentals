function partyCodeLogic(input) {

    let heroesCount = input.shift();
    let party = {};
    let maxHp = 100;
    let maxMp = 200;

    let command = input.shift();


    for (let i = 0; i < heroesCount; i++) {
        let tokens = command.split(" ");
        let heroName = tokens.shift();
        let hp = Number(tokens.shift());
        let mp = Number(tokens.shift());
        let hero = {
            hp: hp,
            mp: mp
        }
        party[heroName] = hero;
        command = input.shift();
    }


    while (command != "End") {
        let tokens = command.split(" - ");
        let action = tokens.shift();
        let heroName = tokens.shift();

        if (action == "Heal") {

            let amount = Number(tokens.shift());
            let currentHP = party[heroName].hp;
            let newHP = currentHP + amount;
            if (newHP > maxHp) {
                let diff = newHP - maxHp;
                amount -= diff
                newHP = 100;
            }
            party[heroName].hp = newHP;
            console.log(`${heroName} healed for ${amount} HP!`)



        } else if (action == "Recharge") {
            let amount = Number(tokens.shift());
            let currentMP = party[heroName].mp;
            let newMP = currentMP + amount;
            if (newMP > maxMp) {
                let diff = newMP - maxMp;
                amount -= diff;
                newMP = 200;
            }
            party[heroName].mp = newMP;
            console.log(`${heroName} recharged for ${amount} MP!`);

        } else if (action == "TakeDamage") {
            let damage = Number(tokens.shift());
            let attacker = tokens.shift();
            let currentHP = party[heroName].hp;
            let newHP = currentHP - damage;
            party[heroName].hp = newHP;
            if (newHP > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${newHP} HP left!`)
            } else {
                delete party[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`)
            }

        } else if (action == "CastSpell") {
            let mpNeeded = Number(tokens.shift());
            let spellName = tokens.shift();
            let currentMP = party[heroName].mp;

            if (currentMP >= mpNeeded) {
                currentMP -= mpNeeded;
                party[heroName].mp = currentMP;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${currentMP} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        }

        command = input.shift();
    }

    for (let hero in party) {
        let { hp, mp } = party[hero];
        console.log(`${hero}`);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`)

    }

    

}


// partyCodeLogic(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);

partyCodeLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);