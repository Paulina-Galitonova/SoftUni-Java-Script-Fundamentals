function matchDates(input){


let patern=/\b(?<day>\d{2})([.\-\/])(?<mounth>[A-Z][a-z][a-z])\2(?<year>\d{4})\b/g;



while ((validDate = patern.exec(input)) !== null) {
    // Add the found full name to the validNames array.

    let day=validDate.groups["day"];
    let mounth=validDate.groups["mounth"];
    let year=validDate.groups["year"];
    console.log(`Day: ${day}, Month: ${mounth}, Year: ${year}`);
}

}

matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'] )