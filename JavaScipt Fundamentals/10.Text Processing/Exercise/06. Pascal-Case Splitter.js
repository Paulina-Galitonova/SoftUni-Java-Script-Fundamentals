function pascalCase(string) {
    //You will receive a single string. 
// This string is written in 	 format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.


    let words = [];
    let currentWord = string[0];
   
    for (let i = 1; i < string.length; i++) {
        let ch=string[i];
        if (ch == ch.toLowerCase()){
            currentWord+=ch;
           
        } else{
            words.push(currentWord);
            currentWord=ch;

        }
        
         
    } 
    words.push(currentWord);

    console.log(words.join(", "))



}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');