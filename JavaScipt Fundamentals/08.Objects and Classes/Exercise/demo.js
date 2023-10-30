function catalog(arr) {
    let products = {};

    for (let line of arr) {
        let [name, price] = line.split(' : ');
        let initial = name[0];

        if (!products[initial]) {
            products[initial] = [];
        }

        products[initial].push({ name, price: Number(price) });
    }

    let sortedInitials = Object.keys(products).sort();

    for (let initial of sortedInitials) {
        console.log(initial);

        products[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}
catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );