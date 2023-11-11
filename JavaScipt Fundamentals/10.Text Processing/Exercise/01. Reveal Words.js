function revealWords(words,template){

// //Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.


let wordsArr=words.split(", ");



for (let word of wordsArr){
    let length=word.length;
    let search="*".repeat(length);

     template=template.replace(search,word);
}

console.log(template);
// let templateSplit=template.split(" ");


// for(let i=0; i<templateSplit.length;i++){
//     if (templateSplit[i].includes("*")){
//         let length=templateSplit[i].length;
       
//        for (let wordRe of wordsArr){
//         if(wordRe.length == length){
//         templateSplit[i]=wordRe;
//         break;

//         }
//        }


//     }
// }

// console.log(templateSplit.join(" "));


}



revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)