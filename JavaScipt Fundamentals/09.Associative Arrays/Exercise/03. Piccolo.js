function picolo(input) {
    // //Write a function that:
    // •	Records a car number for every car that enters the parking lot
    // •	Removes a car number when the car goes out
    // •	Input will be an array of strings in format [direction, carNumber]
    // Print the output with all car numbers which are in the parking lot sorted in ascending by number.
    // If the parking lot is empty, print: "Parking Lot is Empty".

    let garage = {};


    for (let car of input) {
        let [direction, carNumber] = car.split(", ");

        if (direction == "IN") {
            garage
            [carNumber] = direction;
        } else if (direction == "OUT") {
            delete garage
            [carNumber];
        }

    }


    let sorted = Object.entries(garage).sort((a, b) => a[0].localeCompare(b[0]));

    if (sorted.length == 0) {
        console.log("Parking Lot is Empty");
    } else {

        for (let [key, value] of sorted) {
            if (value=="IN"){
                console.log(key);
            }
        }


    }







}

picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

// picolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// )