function modernTimes(input){
//Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 


function containsOnlyLetters(word) {
    return /^[A-Za-z]+$/.test(word);
  }

let specialWords=[];

let arr=input.split(" ");
for (let word of arr){
    if (word.includes("#")){
       let specialWord=word.substring(1);
       if (containsOnlyLetters(specialWord)) {
        specialWords.push(specialWord);

    }
}

}

console.log(specialWords.join(" \n"));
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');