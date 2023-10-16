function sorting(input){

//Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.  
//Print the elements on one row, separated by a single space.
let arr = input.slice();
arr.sort((a, b) => a - b);;

let newArr=[];

for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr.pop()); // Add the largest element
    } else {
      newArr.push(arr.shift()); // Add the smallest element
    }
  }

console.log(newArr.join(" "));


}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);