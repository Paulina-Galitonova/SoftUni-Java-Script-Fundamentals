function bitcoinMaining(input) {

    let inputLenght=input.lenght;
   

    let countDays = 0;
    let priceBitcoin = 11949.16;
    let earnedMoney=0;
    let countBitcoins=0;

    for (let i=0; i <= inputLenght; i++) {
        countDays++;
        let todayGold=input[i];
        if (countDays % 3==0){
            todayGold =todayGold -(todayGold * 0.30);
        }
        let todayMoney= todayGold * 67.51;
        earnedMoney += todayMoney;

        if (earnedMoney >= priceBitcoin) {
            countBitcoins ++;
            earnedMoney -= priceBitcoin;

        } while (earnedMoney >=priceBitcoin) {
            countBitcoins++;
            earnedMoney -= priceBitcoin;
        } 

    }

    



    



x}


bitcoinMaining([100,200,300]);