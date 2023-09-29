function equalArrays(arr1,arr2,) {

//    Write a program, which receives two string arrays containing number representations, 
//    and prints on the console whether they are identical.

//Arrays are identical if their elements at same indexes are equal.
// If they are identical, find the sum of the first array

// If the arrays are NOT identical, find the first index where the arrays differ and print

let sum = 0;
let isIdentical=true;
let currentIndex=0;

 for (let i=0; i<arr1.length; i++) {
    arr1[i]= Number(arr1[i]);

 }

 for (let i=0; i<arr2.length; i++) {
    arr2[i]= Number(arr2[i]);

 }


 for (let i =0; i <arr1.length; i++){
    
    if (arr1[i] !== arr2[i]){
        currentIndex=i;
        isIdentical=false;
        break;
        } else {
            sum +=arr1[i];
        }
    } 

    //   console.log(result ? `${num} Amazing? True`:`${num} Amazing? False`)

    console.log (isIdentical?`Arrays are identical. Sum: ${sum}`:`Arrays are not identical. Found difference at ${currentIndex} index` )

//  if (isIdentical) {
//     console.log(`Arrays are identical. Sum: ${sum}`);
//  } else{
//     console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
//  }
}


equalArrays(['10','20','30'], ['10','20','30']);