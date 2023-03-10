//// constructor
//function Person(firstName, lastName, dob){
//    this.firstName = firstName;
//    this.lastname = lastName;
//    this.dob = new Date(dob);
////    turned into a prototypes
////    this.getBirthYear = function (){
////        return this.dob.getFullYear();
////    }
////    this.getFullName = function (){
////        return `${this.firstName} ${this.lastname}`;
////    }
//}
//
//// Prototypes
//Person.prototype.getBirthYear = function (){
//    return this.dob.getFullYear();
//}
//
//Person.prototype.getFullName = function (){
//    return `${this.firstName} ${this.lastname}`;
//}


// Class
class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastname = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastname}`;
    }
}


// instantiate obj
//'xx-xx-xxxx' NaN
const person1 = new Person('Cobalt','Claudia','1/1/1900');
const person2 = new Person('John','Doe', '3/6/1970');


console.log('oop.js')
console.log(person1.lastname + ' is awesome');
console.log(person1.dob.getFullYear());
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName())
console.log(person1);

