function oddOccurences(input){

// //Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.


let lowerCase=input.toLowerCase();
let words=lowerCase.split(" ");
let wordsObj={};

for (let word of words){
    if (wordsObj[word]){
        wordsObj[word]++;;
    } else {
        wordsObj[word]=1;
    }
   
}

let result=[];

for (let word in wordsObj){
    if(wordsObj[word] %2 ===1){
        result.push(word);
    }
}


console.log(result.join(" "))


}

// oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');