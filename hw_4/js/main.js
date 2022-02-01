const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
////////////////
const getPairs  = (students) => [[students[0],students[2]], [students[1],students[3]], [students[4],students[5]]];

// console.log(getPairs(students))
///////////////
const taskCouple = (students, themes) => {
    const studentsGroup = [...getPairs(students,themes)];
    const groupThemes = [];
    for(let i = 0; i < studentsGroup.length; i++){
        groupThemes.push([studentsGroup[i].join(' i '), themes[i]])
    }
    return groupThemes
} 
console.log(taskCouple(students, themes));

///////////////
const studentsMarks = (marks, students) => {
    const studentsMarks = [];
for(let i = 0; i < students.length; i++){
studentsMarks.push([students[i],marks[i]])
}
return studentsMarks
}
console.log(studentsMarks(marks, students))
///////////////

// const getRandomNotes = (marks) => {
//     const studentsTopic = [...taskCouple(students, themes)];
//     const groupThemesNam = [];

// for(let i = 0; i < studentsTopic.length; i++ ){  
//     groupThemesNam.push([studentsTopic[i],1])
// }
// return groupThemesNam
// }
// console.log(getRandomNotes())
const getRandomNumber = () => {
    return Math.round(Math.random() * (5 - 1) + 1)
}

const marksCouple = () => {
    const studentsGroup = [...getPairs(students)];
    const groupMarks = [];
    for(let i = 0; i < studentsGroup.length; i++){
        groupMarks.push([studentsGroup[i],getRandomNumber() ])
    }
    return groupMarks
} 
console.log(marksCouple());

