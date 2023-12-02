function thePianist(input) {

    let numberPiesecs = Number(input.shift());

    let collection = {};


    for (let i = 0; i < numberPiesecs; i++) {
        let [piece, composer, key] = input.shift().split("|");
        collection[piece] = { composer, key };

    }

    let command = input.shift();

    while (command != "Stop") {
        let tokens = command.split("|");
        let action = tokens[0];
        let piece = tokens[1];

        if (action == "Add") {
            let composer = tokens[2];
            let key = tokens[3];

            if (piece in collection) {
                console.log(`${piece} is already in the collection!`);
            } else {
                collection[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }


        } else if (action == "Remove") {
            if (piece in collection) {
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (action == "ChangeKey") {
            let newKey = tokens[2];
            if (piece in collection) {
                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }


        }


        command = input.shift();

    }

    for (let [name, piece] of Object.entries(collection)) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`)
   
}

}





// `thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'  
//   ]
//   );`

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)