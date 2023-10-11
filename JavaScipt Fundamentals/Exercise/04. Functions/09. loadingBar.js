function loadingBar(n) {

    //You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
    //Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.

    let isLoaded = checkNumber(n);
    let numberPercents = percentsCount(n);
    let numberDots = dotsCount(n);

    if (isLoaded) {
        console.log("100% Complete!");
        console.log(`[${numberPercents}]`)
    } else {
        console.log(`${n}% [${numberPercents}${numberDots}]`);
        console.log("Still loading...");
    }




    function checkNumber(n) {
        if (n == 100) {
            return true;
        }
    }

    function percentsCount() {
        let percentsCount = "";

        for (let i = 0; i < n; i += 10) {
            percentsCount += "%";

        }
        return percentsCount;
    }

    function dotsCount() {
        let dotsCount = "";
        for (let i = 1; i <= 10 - n / 10; i++) {
            dotsCount += ".";
           
        }
        return dotsCount;
    }
}

// //function loadingBar(n) {
//     let isLoaded = checkNumber(n);
//     let numberPercents = percentsCount(n);
//     let numberDots = dotsCount(n);

//     if (isLoaded) {
//         console.log("100% Complete!");
//         console.log(`[${numberPercents}]`);
//     } else {
//         console.log(`${n}% [${numberPercents}${numberDots}]`);
//         console.log("Still loading...");
//     }

//     function checkNumber(n) {
//         return n === 100; // Check if n is equal to 100
//     }

//     function percentsCount(n) {
//         const percentsCount = "%".repeat(n / 10); // Use repeat to create the percent string
//         return percentsCount;
//     }

//     function dotsCount(n) {
//         const dotsCount = ".".repeat(10 - n / 10); // Use repeat to create the dots string
//         return dotsCount;
//     }
// }

// loadingBar(50);



loadingBar(50);