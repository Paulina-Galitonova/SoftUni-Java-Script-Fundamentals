function sortAnArrayByCriteria(words){
//Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
//The input comes as an array of strings.
//The output is the ordered array of strings, each on a separate line.




words.sort((a,b)=>a.length-b.length ||a.localeCompare(b) )


for (let i=0; i<words.length; i++){
    console.log(words[i])
}
}
sortAnArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);