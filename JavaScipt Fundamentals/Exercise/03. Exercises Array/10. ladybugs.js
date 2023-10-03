function ladybugs(arr){

    //•	You will receive an array of strings and the first element is an integer – the size of the field
    //•	The second element is a string containing the initial indexes of all ladybugs separated by a blank space. 
    //The given indexes may or may not be inside the field range

    //•	The next elements in the array are commands in the format: 
    //"{ladybug index} {direction} {fly length}"
    // /[ 3, '0 1','0 right 1','2 right 1' ]
    //    0 ,  1  ,  2,           3  

    let inputArray = arr;
    let inputString = inputArray[0];
    let elementsArray = inputString.split((', '));
    console.log (elementsArray);

}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
);