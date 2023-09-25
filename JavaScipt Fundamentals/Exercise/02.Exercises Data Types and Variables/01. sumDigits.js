function sumDigits(num) {
    //Write a function, which will be given a single number. Your task is to find the sum of its digits.

    let sum = 0;
    let numText = String(num);
    for (let i = 0; i < numText.length; i++) {
        sum += Number(numText[i]);
    }

    console.log(sum);

}
sumDigits(543);