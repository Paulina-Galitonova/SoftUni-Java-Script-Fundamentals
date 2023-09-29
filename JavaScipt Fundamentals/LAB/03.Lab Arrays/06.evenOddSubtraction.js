function evenOddSubtraction (arr) {

    let sumEven=0;
    let sumOdd=0;


//Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
for ( let i=0; i <arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sumEven += arr[i];
    } else {
        sumOdd += arr[i];
    }

}

console.log (sumEven-sumOdd);

}


evenOddSubtraction([2,4,6,8,10]);