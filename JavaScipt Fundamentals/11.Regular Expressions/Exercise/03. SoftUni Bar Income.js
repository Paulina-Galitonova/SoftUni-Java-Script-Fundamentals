function softUniBarIncome(input) {


    let command = input.shift();
    let patern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d+\$)/g

    let totalIncome=0;



    while (command !== "end of shift") {
        let match=command.match(patern);

       

        while ((items = patern.exec(command)) !== null) {
        let name=items.groups["name"];
        let pruduct=items.groups["product"];
        let count=Number(items.groups["count"]);
        let price =parseFloat(items.groups["price"]);
        let totalPrice=count*price;
        totalIncome+=totalPrice;

        
        console.log(`${name}: ${pruduct} - ${totalPrice.toFixed(2)}`)
    }
        command = input.shift();
    }


    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);