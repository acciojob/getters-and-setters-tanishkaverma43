//complete this code
class Person {
	constructor(name, age){
	this.name= name;
	this.age= age;
}
}

class Student extends Person {
	study(){
		console.log(this.name + "is studying")
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name + "is teaching")
	}
}

let student  = new Student("Tanishka", 20);
let teacher = new Teacher("krishna", 21);

student.study();
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
