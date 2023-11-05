function storage(input) {

    //Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The input comes as an array of strings. Try using a Map().

    let map = new Map();

    for (let info of input) {
        let tokens = info.split(" ");
        let product = tokens[0];
        let quality = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +quality);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quality;
            map.set(product,newQuantity);
        }
    }

    for(let [key,value] of map.entries()){
        console.log(`${key} -> ${value}`);
    }

}


storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);