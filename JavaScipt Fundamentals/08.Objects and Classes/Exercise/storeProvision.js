function storeProvisions(arr1, arr2) {
    // Create an object to store the products and their quantities.
    const productStock = {};

    // Process the first array (current stock).
    for (let i = 0; i < arr1.length; i += 2) {
        const name = arr1[i];
        const quantity = Number(arr1[i + 1]);
        
        if (name in productStock) {
            // If the product is already in stock, increase the quantity.
            productStock[name] += quantity;
        } else {
            productStock[name] = quantity;
        }
    }

    // Process the second array (ordered products).
    for (let i = 0; i < arr2.length; i += 2) {
        const name = arr2[i];
        const quantity = Number(arr2[i + 1]);

        if (name in productStock) {
            // If the product is already in stock, increase the quantity.
            productStock[name] += quantity;
        } else {
            productStock[name] = quantity;
        }
    }

    // Print the product stock.
    for (const [name, quantity] of Object.entries(productStock)) {
        console.log(`${name} -> ${quantity}`);
    }
}

storeProvisions(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);