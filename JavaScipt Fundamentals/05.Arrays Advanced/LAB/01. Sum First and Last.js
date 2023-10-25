function sumFirstLast(array){
//Write a function that calculates and prints the sum of the first and the last elements in an array.
//The input comes as an array of string elements holding numbers.
//The output is printed on the console.

let stringToNum= array.map(Number);
let first=stringToNum.shift()
let last = stringToNum.pop();

console.log(last+first);


}
sumFirstLast(['5', '10']);