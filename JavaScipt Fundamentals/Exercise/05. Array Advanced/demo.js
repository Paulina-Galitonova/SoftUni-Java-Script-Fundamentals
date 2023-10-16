function searchNumber(arr, arr2) {
    // /You will receive two arrays of integers. The second array is containing exactly three numbers. 
    //The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
    //The third number is the number we search in our collection after the manipulations. 
    //As output print how many times that number occurs in our array in the following format: 

    //The first number represents the number of elements you have to take from the first array (starting from the first one).

let elements=takeElements(arr);
let afterDeletions=deleteEl(elements);
console.log(afterDeletions);


    function takeElements(input) {
        let numberElementsToTake = arr2[0];
        let arrNew = arr.splice(0, numberElementsToTake + 1);
        return arrNew;

    }

    function deleteEl(input){
        let elementsToDelete=arr2[1];
        let arrNew=arr.splice (0,elementsToDelete);
        return arrNew;
    }


}

searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);