function firstLastKNumber(array){

//Write a function that prints the first k and the last k elements from an array of numbers.
//The input comes as an array of number elements. The first element represents the number k, all other elements are from the array that needs to be processed.
//The output is printed on the console on two lines. On the first line, print the first k elements, separated by space. On the second line, print the last k elements, separated by space.

let k= array.shift();
let first = array.slice(0,k);
let last=array.slice(-k);
console.log(first.join(" "));
console.log(last.join(" "));

}


firstLastKNumber([2, 
    7, 8, 9]
    );
    firstLastKNumber([3,
        6, 7, 8, 9]
       );