function solve(){

    let text = '1 2 3 4';
    let regexp = /\s+/g;
    let result = text.split(regexp);
    console.log(result) // ['1', '2', '3', '4'];
}

solve();