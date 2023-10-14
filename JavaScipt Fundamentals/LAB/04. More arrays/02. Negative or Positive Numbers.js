function negativeOrPositive(array){

//Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.
//The input comes as an array of string elements holding numbers.
//The output is printed on the console, each element on a new line.

let arrToNum=array.map(Number);
let newArray=[];

for (let num of arrToNum){

    if (num <0){
        newArray.unshift(num);
    } else {
        newArray.push(num);

    }



}

for (let element of newArray){
    console.log(element);
}

}

negativeOrPositive(['7', '-2', '8', '9']);