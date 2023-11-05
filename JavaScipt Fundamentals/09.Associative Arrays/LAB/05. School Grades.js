function schoolGrades(input) {

    //Write a function that stores students and their grades throughout the year. If a student appears more than once, add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.

    let students = {};


    for (let info of input) {
        let [name, ...grades] = info.split(' ');

        if (!students[name]) {
            students[name] = [];
        }
        students[name].push(...grades.map(Number));




    }



    let sorted = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

    let finalStudens = {};

    for (let [name, grades] of sorted) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        let average = sum / grades.length;
        finalStudens[name] = average;

    }

    for (let [key, value] of Object.entries(finalStudens)) {
        console.log(`${key}: ${value.toFixed(2)}`);
    }




}


// schoolGrades(['Lilly 4 6 6 5',
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6']
// );

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
)