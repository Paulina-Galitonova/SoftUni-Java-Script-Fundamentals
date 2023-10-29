function inventory(arr) {
    let heroes = [];

    for (let hero of arr) {
        let tokens = hero.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(", ").filter(item => item !== ''); // Remove empty items

        let heroObj = { Hero: name, level: level, Items: items };
        heroes.push(heroObj);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nItems => ${hero.Items.join(', ')}\n`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
