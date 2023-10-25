function reverseString (text) {

    let textLenght=text.length-1;
    let result="";

    for (let i=textLenght; i>=0; i--){
        result += text[i] + "";

    }



console.log (result);


}

reverseString('SoftUni');