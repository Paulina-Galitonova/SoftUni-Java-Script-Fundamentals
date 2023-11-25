function adAstra(input){

    let pattern=/(\||#)(?<name>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    let totalCalories=0;
    let dailyCalories=2000;
    let itemList=[];






    while ((items = pattern.exec(input)) !== null) {
        let itemName=items.groups["name"];
        let expirationDate=items.groups["date"];
        let calories = Number(items.groups["calories"]);
        totalCalories +=calories;
       
        itemList.push({itemName,expirationDate,calories})


    }

    let day=totalCalories/dailyCalories;
    console.log(`You have food to last you for: ${Math.floor(day)} days!`);

    itemList.forEach(product =>console.log(`Item: ${product.itemName}, Best before: ${product.expirationDate}, Nutrition: ${product.calories}`))


}
// adAstra([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
//     ]
//     );

    // adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])

    adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);