function commonElements(firstArr, secondArr) {

    //Write a function, which prints common elements in two string arrays.
    // Print all matches on separate lines. Compare the first array with the second array.

    
    


    for (let i = 0; i < firstArr.length; i++) {

        for (let j = 0; j < secondArr.length; j++) {

            if (firstArr[i] === secondArr[j]) {
                console.log(firstArr[i]);
            }
        }






    }
}

    commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);