function storeProvisions(arr1,arr2){

    //You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.

    //Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
    //The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)


    let productStock={};


    for (let i=0; i<arr1.length;i+=2){
        let name=arr1[i];
        let quantity=Number(arr1[i+1]);

        productStock[name]=quantity;


    }

    for (let i =0; i<arr2.length; i+=2){
        let name=arr2[i];
        let quantity=Number(arr2[i+1]);

        if (name in productStock){
            productStock[name] +=quantity;
        } else{
            productStock[name]=quantity;
        }
    }


    for (let [key,value]of Object.entries(productStock)){
        console.log(`${key} -> ${value}`)

    }

}

// storeProvisions([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
//     )

storeProvisions([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );