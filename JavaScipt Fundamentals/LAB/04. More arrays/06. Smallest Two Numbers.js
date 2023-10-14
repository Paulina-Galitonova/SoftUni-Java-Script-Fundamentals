function smallestTwoNum(arr) {
    //Write a function that prints the two smallest elements from an array of numbers.\
    //The input comes as an array of number elements.
    //The output is printed on the console on a single line, separated by space.

    let sortedInAscending = arr.sort((a, b) => a - b);
    let result = sortedInAscending.slice(0,2);

    console.log (result.join(" "));

}
smallestTwoNum([30, 15, 50, 5]);