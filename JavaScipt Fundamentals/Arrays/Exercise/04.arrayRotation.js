function arrayRotation(arr, num) {
    // /Write a function that receives an array and the number of rotations you have to perform. 

    //Note: Depending on the number of rotations, the first element goes to the end.

    //Print the resulting array elements separated by a single space.


    let coutnt = 0;

    while (coutnt < num) {
        let first=arr.shift();
        arr.push(first);
        coutnt++;
    }

    console.log(arr.join(" "));


}


arrayRotation([32, 21, 61, 1], 4);