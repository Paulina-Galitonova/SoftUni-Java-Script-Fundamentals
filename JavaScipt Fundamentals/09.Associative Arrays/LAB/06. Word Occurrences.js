function wordOccurrences(input){
//Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.

let map=new Map();

for (let word of input){

    if(!map.has(word)){
        let count=1;
        map.set(word, count);
    } else{
        currentCount=map.get(word);
        newCount=currentCount+1;
        map.set(word,newCount);
    }

}


let array=Array.from(map);

let sorted=array.sort((a,b) => b[1]-a[1]);

let sortedMapWords=new Map(sorted);


for (let [key,value] of sortedMapWords.entries()){
    console.log(`${key} -> ${value} times`);
}


}


// wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);