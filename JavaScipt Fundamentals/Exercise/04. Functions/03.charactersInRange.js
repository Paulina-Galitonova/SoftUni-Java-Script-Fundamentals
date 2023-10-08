function charactersInRange(char1, char2) {
    //Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.

    let charCode1 = char1.charCodeAt(0);
    let charCode2 = char2.charCodeAt(0);
    let largerNumber = Math.max(charCode1, charCode2);
    let smallerNumber = Math.min(charCode1, charCode2);

    let result = " ";

    for (let i = smallerNumber + 1; i < largerNumber; i++) {
        result += String.fromCharCode(i)+ " ";


    }


    console.log(result);

}

charactersInRange('#',
':'
)