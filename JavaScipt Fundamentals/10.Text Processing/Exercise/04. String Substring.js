function stringSubstring(word,text){

//     //The input will be given as two separated strings (a word as a first parameter and a text as a second).
// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program. 
// If you don't find the word print: "{word} not found!"

text = text.toLowerCase();

let arr=text.split(" ");
let isFound=false;

for (let part of arr){
    if(part == word){
        console.log(word);
        isFound=true;

        break;
    }
  
}

if(!isFound){
    console.log(`${word} not found!`);
}



// if(text.includes(word)){
//     console.log(word);
   
// } else{
//     console.log(`${word} not found!`)
// }






}

stringSubstring('javascript',
'JavaScript is the best programming language'
);