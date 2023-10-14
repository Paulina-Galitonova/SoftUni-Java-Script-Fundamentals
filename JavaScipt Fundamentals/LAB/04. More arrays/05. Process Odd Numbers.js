function processOddNumbers(arr){

//You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
//The output is printed on the console on a single line, separated by space.

let newArr=[];


for (let i=0; i<arr.length; i++){
    if (i %2 !==0){
        let result=arr[i] *2;
        newArr.push(result);

    }

}
let reversed=newArr.reverse();
console.log (reversed.join(" "))
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);