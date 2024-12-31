//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set age(newAge) {
		this._age = newAge;
	}
}

class Student extends Person {
	study(){
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name + " is teaching");
	}
}

let student  = new Student("Tanishka", 20);
let teacher = new Teacher("Krishna", 21);

student.study(); // Output: Tanishka is studying
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
