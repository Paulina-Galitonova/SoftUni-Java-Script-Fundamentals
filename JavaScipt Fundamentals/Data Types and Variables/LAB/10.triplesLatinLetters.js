function triplesLatinLetters(n) {
    //Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically:
    //Perform 3 nested loops from 0 to n. For each number num print its corresponding Latin letter as follows



    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (let b = 0; b < n; b++) {
            let letter2 = String.fromCharCode(97 + b);
            for (let c = 0; c < n; c++) {
                let letter3 = String.fromCharCode(97 + c);
                console.log(`${letter1}${letter2}${letter3}`);
            }
           
           
        }








    }



}

triplesLatinLetters('3');