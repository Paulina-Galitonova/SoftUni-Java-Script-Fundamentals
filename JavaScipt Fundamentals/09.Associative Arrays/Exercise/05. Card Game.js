function cardGame(input){
//You are given a sequence of people and for every person what cards he draws from the deck. The input will be an array of strings. Each string will be in the format:
//{personName}: {PT, PT, PT,… PT}
//Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
//A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
//A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
//Finally print out the total value each player has in his hand in the format:
// /{personName}: {value}

let player={};

for( let info of input){
    let tokens=info.split(": ");
    let name=tokens[0]
    let steck=tokens[1];
    let cards=steck.split(", ");
    for (let card of cards){
        let currentArr=[];
        if(currentArr.includes(card)){
            continue;
        } else{
            currentArr.push(card);
            let power=card[0];
            let type=card[1].charCodeAt(0);
            let cardValue=power*type;
        }
    }

  



}


}


cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );