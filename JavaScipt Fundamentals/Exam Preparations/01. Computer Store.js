function computarStore(input){
//Write a program that prints you a receipt for your new computer. You will receive the parts' prices (without tax) until you receive what type of customer this is - special or regular. 

//Once you receive the type of customer you should print the receipt.
//The taxes are 20% of each part's price you receive. 
//If the customer is special, he has a 10% discount on the total price with taxes.
//If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price. 
//If the total price is equal to zero, you should print "Invalid order!" on the console.

let index=0;
let command=input[index];
let totalPriceNoTax=0;
let finalPrice=0;
index++;


while ((command !== "special") && (command !=="regular")){
   partPrice=Number(command);

   if (partPrice <0){
    console.log("Invalid price!");
   }  else{
    totalPriceNoTax += partPrice;
   }
command=input[index];
   index++;
}

let taxes =totalPriceNoTax * 0.20;
finalPrice=totalPriceNoTax + taxes;

if (command == "special"){
    finalPrice = finalPrice- (finalPrice * 0.10);
}

if (finalPrice ==0){
    console.log("Invalid order!");
} else{
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log ("-----------");
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
}


}

computarStore([
    'regular'
    ])
    
    ;    