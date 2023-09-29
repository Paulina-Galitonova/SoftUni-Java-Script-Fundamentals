function reverseArrayNumbers(num, array){

  //  Write a program, which receives a number n and an array of elements.
//create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.

let arrayNew=[];

// for (let i = 0; i < num; i++) {
//     arrayNew.push(array[i]);
// }


for (let i = num-1; i >=0; i--) {
    arrayNew.push(array[i]);

}

console.log(arrayNew.join(" "));





}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);