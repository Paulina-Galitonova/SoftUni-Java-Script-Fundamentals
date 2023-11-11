function cutAndRevers(input){

//     //The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves. 
// Print each half on a separate line.

let half=input.length/2;
let firstHalf=input.substring(0,half);
let secondHalf=input.substring(half);

console.log(firstHalf.split('').reverse().join(''));
console.log(secondHalf.split('').reverse().join(''));





}

cutAndRevers('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');