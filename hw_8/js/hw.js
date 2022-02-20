class Student {
    constructor(university, course, fullName, marks){
this.university = university;
this.course = course;
this.fullName = fullName;
this.marks = marks;
    }
    getInfo(){
        return this.course + ' ' + this.university + ' , ' + this.fullName
    }
    get studentsMark(){
        return this.marks
    }
    set studentsMark(newMark){
        this.marks.push(newMark)
    }
    getMidNote(){
        const midNote = this.marks.flat().reduce((sum, current) =>  sum + current);
        return midNote / this.marks.flat().length
    }
}


const student = new Student('ЛНУ', '3 курс', 'Бенько Ярина Тарасівна',[5, 4, 4, 5])
const student2 = new Student('Львівська Політехніка', '1 курс', 'Требко Анна Дмитрівна', [5, 5, 4, 5])
const student3 = new Student('УАД', '2 курс', 'Гірченко Іван Іванович', [2, 4, 4, 3])
console.log(student2.getInfo())
console.log(student3.getInfo())
//console.log('student:', student2)
console.log(student.studentsMark)
student.studentsMark = 5;
console.log(student.studentsMark)
console.log(student.getMidNote())