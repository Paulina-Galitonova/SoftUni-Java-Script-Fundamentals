function searchNumber(arr,arr2){
// /You will receive two arrays of integers. The second array is containing exactly three numbers. 
//The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
//The third number is the number we search in our collection after the manipulations. 
//As output print how many times that number occurs in our array in the following format: 

//The first number represents the number of elements you have to take from the first array (starting from the first one).

let numberElementsToTake=arr2[0];
let elementsToDelete=arr2[1];
let targetNim=arr2[2];

let arrNew =arr.slice(0,numberElementsToTake);


arrNew.splice(0,elementsToDelete);

let coultTimes= arrNew.filter((item) => item === targetNim).length;


console.log(`Number ${targetNim} occurs ${coultTimes} times.`);
}

searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );