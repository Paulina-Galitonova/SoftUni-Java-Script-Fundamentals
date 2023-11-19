function furniture(input){

let patern=/>>(?<furniture>[A-Z]\w+)<<(?<price>\d+(?:\.\d*)?|\.\d+)!(?<quantity>\d+)/g;

let totalMoney=0;

let listItems=[];


while ((items = patern.exec(input)) !== null) {
    let furniture=items.groups["furniture"];
    let price=Number(items.groups["price"]);
    let quantity=Number(items.groups["quantity"]);
    listItems.push(furniture);
    let currentMoney=price*quantity;
    totalMoney+=currentMoney;
    
} 
if(listItems.length>0){
    console.log(`Bought furniture:`);
    console.log(listItems.join("\n"));
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
} else{
    console.log(`Bought furniture:`);
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}


}


furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']


);