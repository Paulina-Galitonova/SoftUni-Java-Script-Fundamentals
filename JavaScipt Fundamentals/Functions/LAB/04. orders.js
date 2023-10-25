function orders (product,quantity){

//Write a function that calculates the total price of an order and prints it on the console.
// The function should receive one of the following products: coffee, coke, water, snacks; 
//and a quantity of the product. The prices for a single piece of each product are: 

let totalPrice=0;
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00

let coffeePrice=1.50;
let waterPrice=1.00;
let cokePrice=1.40;
let snacksPrice=2.00;

// Print the result formatted to the second decimal place.

switch (product){
    case "coffee":
totalPrice=quantity * coffeePrice;
break;
 case "water":
    totalPrice=quantity * waterPrice;
break;
case "coke":
    totalPrice=quantity * cokePrice;

break;
case "snacks":
    totalPrice=quantity * snacksPrice;
break;


}
return totalPrice.toFixed(2);

}


console.log (orders("water", 5));