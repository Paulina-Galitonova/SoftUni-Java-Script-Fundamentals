function inventory(arr) {

    //Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
    //The input comes as an array of strings. Each element holds data for a hero, in the following format:"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
    //You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
    //The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
    //Hero: {heroName}
    // level => {heroLevel}
    // Items => {item1}, {item2}, {item3}
    //arr.sort((a, b) => a - b);

    let heros=[];
    
    for (let hero of arr){
        let tokens=hero.split(" / ");
        let name=tokens[0];
        let level=tokens[1];
        let items=tokens[2].split(", ");
        let herosObj={Hero:name,level:level,Items:items};
        heros.push(herosObj);


        
    }

    let sortedHeros=heros.sort((a,b)=>a.level-b.level);
 
    for (let hero of sortedHeros){
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nItems => ${hero.Items.join(', ')}`)



}
}
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// );

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )