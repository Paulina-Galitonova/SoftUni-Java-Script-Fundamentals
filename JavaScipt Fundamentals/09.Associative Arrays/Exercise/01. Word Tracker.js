function wordTracker(input) {
    // /Write a function that receives an array of words and finds occurrences of given words in that sentence. 
    //The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.
    //Print for each word how many times it occurs. The words should be sorted by count in descending.




    let searchWords = input.shift().split(" ");
    let wordsObj = {};

    for (let searchWord of searchWords) {
        wordsObj[searchWord] = 0;
    }

    for (let word of input) {
        if (searchWords.includes(word)) {
            wordsObj[word]++;
        }
    }

    let sorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]
// )

wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )