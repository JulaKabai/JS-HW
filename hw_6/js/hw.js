const students = [
	{
		name: "Tanya",
		course: 3,
		subjects: {
			math: [4, 4, 3, 4],
			algorithms: [3, 3, 3, 4, 4, 4],
			data_science: [5, 5, 3, 4],
		},
	},
	{
		name: "Victor",
		course: 4,
		subjects: {
			physics: [5, 5, 5, 3],
			economics: [2, 3, 3, 3, 3, 5],
			geometry: [5, 5, 2, 3, 5],
		},
	},
	{
		name: "Anton",
		course: 2,
		subjects: {
			statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
			english: [5, 3],
			cosmology: [5, 5, 5, 5],
		},
	},
];
/////////////////////////////////////////////task 1//
const studentsSubjects = (student) => {
	const subjectsArr = Object.keys(student.subjects);
	return subjectsArr.map((subject) =>
		(subject[0].toUpperCase() + subject.substring(1).toLowerCase()).replace(
			"_",
			" "
		)
	);
};
console.log(studentsSubjects(students[0]));
console.log(studentsSubjects(students[1]));
console.log(studentsSubjects(students[2]));
////////////////////////////////////////////task 2
const getAverageMark = (student) => {
	const markArr = Object.values(student.subjects);
	const midNote = markArr.flat().reduce((sum, current) =>  sum + current);
	return (midNote / markArr.flat().length).toFixed(2);
};
console.log(getAverageMark(students[0]));
console.log(getAverageMark(students[1]));
console.log(getAverageMark(students[2]));
/////////////////////////////////////////////task3
const getStudentsInfo = (student) => {
	return {
		course: student.course,
		name: student.name,
		averageMark: getAverageMark(student),
	};
};
console.log(getStudentsInfo(students[0]));
console.log(getStudentsInfo(students[1]));
console.log(getStudentsInfo(students[2]));
//////////////////////////////////////////////task4
const getStudNames = (students) => {
		const studentsNames = students.map((student) => student.name)
		return studentsNames.sort()
}
console.log(getStudNames(students))
//////////////////////////////////////////////task5
const getBestStudent = (students) => {
	const marksArr = students.map((student) => Number(getAverageMark(student)));
	return students[marksArr.indexOf(Math.max(...marksArr))].name;
}
console.log(getBestStudent(students))
//////////////////////////////////////////////task6

const calculateWordLetter = (word) => {
	const wordSplit = word.toLowerCase().split('');
	const calculateLetter = wordSplit.reduce((acc, letter) => {
		if(acc[letter] === undefined){
			return Object.assign(acc, {
				[letter]: 1
			})
		}else{
			return Object.assign(acc, {
				[letter]: acc[letter] + 1
			});
		}
	}, {} )	
	return calculateLetter
}
console.log(calculateWordLetter('test'))
