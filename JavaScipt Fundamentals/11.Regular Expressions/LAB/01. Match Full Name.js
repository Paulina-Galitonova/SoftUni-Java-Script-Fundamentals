function matchFullName(input) {

    // Define a regular expression pattern to match full names.

    let patern = /\b[A-Z][a-z]+[' '][A-Z][a-z]+\b/g;

    // Create an empty array to store the found full names.

    let validNames = [];

    // Use a while loop and the exec method of the regular expression to search for matches in the text.


    while ((validName = patern.exec(input)) !== null) {
        // Add the found full name to the validNames array.

        validNames.push(validName[0])
    }

    // Output the found full names, separated by a space.

    console.log(validNames.join(" "))

}


matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")