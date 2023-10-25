function loadingBar(n) {
    let isLoaded = checkNumber(n);
    let numberPercents = percentsCount(n);
    let numberDots = dotsCount(n);

    if (isLoaded) {
        console.log("100% Complete!");
        console.log(`[${numberPercents}]`);
    } else {
        console.log(`${n}% [${numberPercents}${numberDots}]`);
        console.log("Still loading...");
    }

    function checkNumber(n) {
        if (checkNumber ===100){}
        return n === 100; // Check if n is equal to 100
    }

    function percentsCount(n) {
        let percentsCount = "%".repeat(n / 10); // Use repeat to create the percent string
        return percentsCount;
    }

    function dotsCount(n) {
        let dotsCount = ".".repeat(10 - n / 10); // Use repeat to create the dots string
        return dotsCount;
    }
}

loadingBar(50);