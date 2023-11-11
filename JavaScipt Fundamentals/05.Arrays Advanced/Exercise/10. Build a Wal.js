function buildWall(input) {
    let wallSections = input.map(Number);
    let dailyConcreteUsage = [];
    let totalConcreteUsed = 0;

    while (wallSections.some(section => section < 30)) {
        let dailyUsage = 0;

        for (let i = 0; i < wallSections.length; i++) {
            if (wallSections[i] < 30) {
                wallSections[i]++;
                dailyUsage += 195;
                totalConcreteUsed += 195;
            }
        }

        if (dailyUsage > 0) {
            dailyConcreteUsage.push(dailyUsage);
        }
    }

    let  totalCost = totalConcreteUsed * 1900;

    console.log(dailyConcreteUsage.join(', '));
    console.log(`${totalCost} pesos`);
}

buildWall([17,22,17,19,17]);