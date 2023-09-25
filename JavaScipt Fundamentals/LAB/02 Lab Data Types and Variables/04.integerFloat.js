function integerFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let typeNum="";

    if (sum % 1 ==0) {
        typeNum = "Integer";

    } else {
        typeNum = "Float";
    }



 

    console.log(`${sum} - ${typeNum}`);




}


integerFloat(100, 200, 303);