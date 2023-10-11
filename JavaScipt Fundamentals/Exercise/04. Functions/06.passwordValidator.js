function passwordValidator(input){
//Write a function that checks if a given password is valid. Password validations are:
//•	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 

let isLongEnough=paswordLenght(input);
let isSumbols=sumbols(input);
let digitsNum=digits(input);

if (!isLongEnough){
    console.log("Password must be between 6 and 10 characters")
} 
 if (!isSumbols){
    console.log ("Password must consist only of letters and digits")
} if (!digitsNum){
    console.log("Password must have at least 2 digits")
} if (isLongEnough && isSumbols && digitsNum){
    console.log("Password is valid");
}


function paswordLenght(pass){
    return input.length >= 6 && input.length <= 10;
    
}

function sumbols(pass){
    for(let i=0; i<input.length;i++){
        let char =input[i];
        if (!(char >= 'a' && char <= 'z') &&
        !(char >= 'A' && char <= 'Z') &&
        !(char >= '0' && char <= '9')) {
      return false;
    }
    }

}

function digits(pass){
    let digitCounts=0;
    for(let i=0; i<input.length;i++){
        let char =input[i];
        if (char >= 0 && char <=9){
            digitCounts++;
        }

} if (digitCounts >=2){
    return true;
} 
 return false;

}
}

passwordValidator ('Pa$s$s');