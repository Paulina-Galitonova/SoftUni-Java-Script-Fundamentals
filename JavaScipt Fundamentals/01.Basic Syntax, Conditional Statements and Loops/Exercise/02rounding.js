function rounding (num1,num2){

    if (num2 >15) {
        num2=15;
    }
    let fixedNum= num1.toFixed(num2);

    console.log(parseFloat(fixedNum));







}
rounding(10.5,3);