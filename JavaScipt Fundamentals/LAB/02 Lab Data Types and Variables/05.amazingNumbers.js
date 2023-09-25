function amazingNumbers (num){

    let numText=String(num);
    let sum=0;
    
    for (i =0; i<numText.length;i++) {
        sum += Number(numText[i]);

    }

   let result = String(sum). includes('9') 
   console.log(result ? `${num} Amazing? True`:`${num} Amazing? False`)


   





}

amazingNumbers(999);