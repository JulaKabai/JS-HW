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
////////////////////////////////////////////////task 1//
//student 1
const studentsSubjects = (student) => {
	const subjectsArr = Object.keys(student.subjects)
	const capitalizeLetter = subjectsArr.map((subject) => {
		return (subject[0].toUpperCase() + subject.substring(1).toLowerCase()).replace('_'," ");
	})
	console.log(capitalizeLetter)
	return null;	
};
console.log(studentsSubjects(students[0]));
//student 2
const studentsSubject = (student) => {
	const subjectsArr = Object.keys(student.subjects)
	const capitalizeLetter = subjectsArr.map((subject) => {
		return (subject[0].toUpperCase() + subject.substring(1).toLowerCase()).replace('_'," ");
	})
	console.log(capitalizeLetter)
	return null;	
};
console.log(studentsSubjects(students[1]));
//student 3
const studentsSubj = (student) => {
	const subjectsArr = Object.keys(student.subjects)
	const capitalizeLetter = subjectsArr.map((subject) => {
		return (subject[0].toUpperCase() + subject.substring(1).toLowerCase()).replace('_'," ");
	})
	console.log(capitalizeLetter)
	return null;	
};
console.log(studentsSubjects(students[2]));
////////////////////////////////////////////task 2
//student1
		const getAverageMark = (student) => {
		const markArr = Object.values(student.subjects)
		const unitedNote = markArr.reduce((a, b) =>{
			return (a.concat(b))
		})
		const midNote = unitedNote.reduce((sum, current) => {
			return (sum + current);
		})
		const averageScore = (midNote / unitedNote.length);
		console.log(averageScore)
		return null
		}
		console.log(getAverageMark(students[0]))
	//student2
	const getAverageMarks = (student) => {
		const markArr = Object.values(student.subjects)
		const unitedNote = markArr.reduce((a, b) =>{
			return (a.concat(b));
		})
		const midNote = unitedNote.reduce((sum, current) => {
			return (sum + current);
		})
		console.log(midNote / unitedNote.length);
		return null;
		}
		console.log(getAverageMark(students[1]))
	//student3
	const getAveragesMarks = (student) => {
		const markArr = Object.values(student.subjects)
		const unitedNote = markArr.reduce((a, b) =>{
			return (a.concat(b))
		})
		const midNote = unitedNote.reduce((sum, current) => {
			return (sum + current)
		})
		console.log(midNote / unitedNote.length)
		return null
		}
		console.log(getAverageMark(students[2]))
/////////////////////////////////////////////task3

