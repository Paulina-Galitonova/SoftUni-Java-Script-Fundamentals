function PyramideOfKingDjoser(baseWH, incrementHSteps) {

    let currentStep = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let countSteps = 0;
    let totalHeight=0;

    for (let i = baseWH; i >= 1; i -= 2) {
        countSteps++;
        currentStep = i * i;

        if (i <= 2) {
            gold = (currentStep) * incrementHSteps;
            break;

        }
         
        let currentStoneSize = i - 2;
        let stoneParameter = currentStoneSize * currentStoneSize;
        let currentStone = stoneParameter * incrementHSteps;
        stone += currentStone;



        if (countSteps % 5 == 0) {
            let currentLapis = (currentStep - stoneParameter)*incrementHSteps;
            lapis += currentLapis;

        } else {
            let currentMarble = (currentStep - stoneParameter) * incrementHSteps;
            marble += currentMarble;
            
        }

        
       
     



    }
    totalHeight= countSteps * incrementHSteps;


    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);





   

}


PyramideOfKingDjoser(23, 0.5);