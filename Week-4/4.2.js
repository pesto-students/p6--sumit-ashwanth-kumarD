//Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject

function Person() { }
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
function Teacher() { }
Teacher.prototype.teach = function (subject) {
this.subject=subject;
    console.log(this.name + " is now teaching " + this.subject);
};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
var result = new Teacher();
result.initialize("Adam", 25);
result.teach("Initialization");