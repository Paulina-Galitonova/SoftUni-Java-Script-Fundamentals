function censoredWords(sentence,word){

    //Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'. 

    let censored='*'.repeat(word.length);

    let result=sentence.replace(word,censored);
   

    while(result.includes(word)){
        result=result.replace(word,censored);
       
    }

    

   

    console.log(result);

}

censoredWords('A small sentence with some small words', 'small');