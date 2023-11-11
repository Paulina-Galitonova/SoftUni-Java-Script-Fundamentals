function companyUser(input){
//Write a function, which keeps the information about companies and their employees. 
//You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
//When you finish reading data, order the companies by their name in ascending order. 
//Print the company name and each employee's id in the following format:

let companyObj={};

for (let info of input){
    let [company,id]=info.split(" -> ");


    if (!companyObj[company]){
        companyObj[company]=[] 
        companyObj[company].push(id);
    } else{
        if(companyObj[company].includes(id) ){
            continue;
        } else{
            companyObj[company].push(id);
        }

    }

}

let sortedCompanyes=Object.entries(companyObj).sort((a, b) => a[0].localeCompare(b[0]));

for (let [key,value] of sortedCompanyes){
    console.log(key);
    for (let id of value){
        console.log(`-- ${id}`);
    }
}


}


companyUser([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );

// companyUser([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]
//     )