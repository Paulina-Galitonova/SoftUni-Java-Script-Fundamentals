function magicSum(arr, number) {

    //Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

    let result = "";

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        for (let j = i + 1; j <= arr.length; j++) {
            let secondNum = arr[j];
            let curentSum = currentNum + secondNum;

            if (curentSum == number) {
                console.log(`${currentNum} ${secondNum}`);
            }



        }


    }


}
magicSum([1, 7, 6, 2, 19, 23],
    8
);