function guineaPigs(input) {


    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let pigWeigh = Number(input[3]) * 1000;
    let day = 0;
    let isEnough = true;

    //Every day Puppy eats 300 gr of food. 
    //Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.

    //Calculate whether the quantity of food, hay, and cover, will be enough for a month.
    //If Merry runs out of food, hay, or cover, stop the program!

    while (day < 30) {
        day++;
        food -= 300;


        if (day % 2 == 0) {
            todayHay = 0.05 * food;
            hay -= todayHay;
        }

        if (day % 3 == 0) {
            todayCover = pigWeigh / 3;
            cover -= todayCover;

        }
        if ((food <= 0) || (hay <= 0) || (cover <= 0)) {
            isEnough = false;
            break;
        }


    }
    let finalfood = food / 1000;
    let finalHay = hay / 1000;
    let finalCover = cover / 1000;

    console.log(isEnough ? (`Everything is fine! Puppy is happy! Food: ${finalfood.toFixed(2)}, Hay: ${finalHay.toFixed(2)}, Cover: ${finalCover.toFixed(2)}.`) : ("Merry must go to the pet store!"));


}
// guineaPigs(["10", 
// "5", 
// "5.2", 
// "1"]);


// guineaPigs(["9",
//     "5",
//     "5.2",
//     "1"]);
guineaPigs((["1",
    "1.5",
    "3",
    "1.5"
])
)