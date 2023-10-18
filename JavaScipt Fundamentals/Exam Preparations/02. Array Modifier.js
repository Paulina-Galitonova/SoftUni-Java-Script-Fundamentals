function arrayModifier(input){

    let numbers=input[0];
    let finalNum=numbers.split(" ").map(Number);
    let index=1;
    let commands=input[index];
    

    while(commands !== "end"){
        let tokens=commands.split(" ");
        //swap

        if(tokens[0]=="swap"){
           let index1=Number(tokens[1]);
            let index2=Number(tokens[2]);
           let  el1=finalNum[index1];
            let el2=finalNum[index2];
            finalNum[index1]=el2;
            finalNum[index2]=el1;

            //multiply
    } else if(tokens[0]=="multiply"){
        let index1=Number(tokens[1]);
        let index2=Number(tokens[2]);
        result=finalNum[index1] * finalNum[index2];
        finalNum[index1]=result;
        

    } else if(tokens[0]=="decrease"){
        for (let i=0;i<finalNum.length; i++){
            finalNum[i]-=1;
        }


    }

    index++;
    commands=input[index];

    }

    console.log(finalNum.join(", "))



}
arrayModifier( [
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );