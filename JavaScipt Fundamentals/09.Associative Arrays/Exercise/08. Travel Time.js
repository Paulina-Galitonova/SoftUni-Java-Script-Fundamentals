function travelTime(input){

    let destinations = {};

for (let info of input){

    let tokens=info.split(" > ");
    let country =tokens[0];
    let city=tokens[1];
    let cost=Number(tokens[2]);
  

    if (!destinations.hasOwnProperty(country)) {
        destinations[country] = {};
    }

    if (!destinations[country].hasOwnProperty(city) || destinations[country][city] > cost) {
        destinations[country][city] = cost;
    }

}

//

let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));

    let result = sortedCountries.map(country => {
        let sortedTowns = Object.entries(destinations[country]).sort((a, b) => a[1] - b[1]);
        let townsInfo = sortedTowns.map(([town, cost]) => `${town} -> ${cost}`).join(' ');
        return `${country} -> ${townsInfo}`;
    }).join('\n');

    console.log(result);
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );


// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
//     ]
//     );