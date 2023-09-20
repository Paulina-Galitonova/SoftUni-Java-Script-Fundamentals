function vacation(peopleCount, groupType, day) {

    let price = 0;

    switch (groupType) {
        case "Students":
            if (day == "Friday") {
                price = peopleCount * 8.45;

            } else if (day == "Saturday") {
                price = peopleCount * 9.80;
            } else if (day == "Sunday") {
                price = peopleCount * 10.46;
            }
            if (peopleCount >= 30) {
                price = price - (price * 0.15);
            }
            break;
        case "Business":
            if (day == "Friday") {
                price = peopleCount * 10.90;

            } else if (day == "Saturday") {
                price = peopleCount * 15.60;
            } else if (day == "Sunday") {
                price = peopleCount * 16;
            }
            if (peopleCount >= 100) {
                peopleCount = peopleCount - 10;
                price = peopleCount * 15.60;
            }
            break;
        case "Regular":
            if (day == "Friday") {
                price = peopleCount * 15;

            } else if (day == "Saturday") {
                price = peopleCount * 20;
            } else if (day == "Sunday") {
                price = peopleCount * 22.50;
            }
            if (peopleCount >= 10 & peopleCount <= 20) {
                price = price - (price * 0.05);
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);





}
vacation(40, "Regular", "Saturday"); 