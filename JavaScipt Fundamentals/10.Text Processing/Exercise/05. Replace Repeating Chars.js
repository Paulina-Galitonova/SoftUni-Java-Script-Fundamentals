function replaceRepeating(str) {

    //Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.


    let noRepeatStr = "";
    let prevChar = "";

    for (let curChar of str) {
       if(curChar !==prevChar){
        noRepeatStr+=curChar;
        prevChar=curChar;
       }
    }

    console.log(noRepeatStr)

}

replaceRepeating('aaaaabbbbbcdddeeeedssaa');




