function bonusScoringSystem(input) {

    let studentsCount = Number(input.shift());
    let lectorsCount = Number(input.shift());
    let bonusAdditional = Number(input.shift());
    let max = 0;
    let bestAttenties=0;

    for (let i = 0; i < studentsCount; i++) {
        countAttendies =Number(input.shift());
        currentStudentBonus = (countAttendies / lectorsCount) * (5 + bonusAdditional);
        if (currentStudentBonus > max){
            max=currentStudentBonus;
            bestAttenties=countAttendies;
        }
        
        
    }


console.log(`Max Bonus: ${Math.ceil(max)}.`);
console.log(`The student has attended ${Math.ceil(bestAttenties)} lectures.`)




}
// bonusScoringSystem([
//     '5', '25', '30',
//     '12', '19', '24',
//     '16', '20']);

  bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
