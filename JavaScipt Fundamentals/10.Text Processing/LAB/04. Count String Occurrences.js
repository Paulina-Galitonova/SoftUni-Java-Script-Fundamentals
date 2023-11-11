function countOccurrences(text,search){
    // Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.

    let arr=text.split(" ");
    let count=0;

    for (let word of arr){
        if(word == search){
            count++;
        }

    }

    console.log(count);

}


countOccurrences('softuni is great place for learning new programming languages',
'softuni'

);