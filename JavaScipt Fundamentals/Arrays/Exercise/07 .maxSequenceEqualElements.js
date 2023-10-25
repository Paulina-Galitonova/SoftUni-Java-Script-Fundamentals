function maxSequence(arr) {
 
//Write a function that finds the longest sequence of equal elements in an array of numbers. 
//If several longest sequences exist, print the leftmost one.

let longestSequence=[];


for (let i=0; i<arr.length; i++){
    let currentEl=arr[i];
   let currentSequence=[currentEl];

    for(let j=i+1; j<arr.length; j++) {
        let secondEl=arr[j];

        if (currentEl === secondEl){
             currentSequence.push(secondEl);
        } else{
            break;
        }
    }

    if (currentSequence.length > longestSequence.length){
        longestSequence = currentSequence;
    }


}

console.log(longestSequence.join(" "));


}
 
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);