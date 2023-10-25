function listOfProducts(input){
//You will receive an array of products. Print a numbered array of all the products ordered by name.

let sorted=input.sort();


for (let i=0;i<sorted.length;i++){
console.log(`${i+1}.${sorted[i]}`);
}

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);