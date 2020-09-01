
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi I am ${this.name}.`;
    }

    getDiscription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDiscription() {
        let description = super.getDiscription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }

}


const student = new Student('Pedro', 30, 'Computer Science');
console.log(student);
console.log(student.getGreeting());
console.log(student.getDiscription());

const otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.getGreeting());
console.log(otherStudent.getDiscription());

const traveler = new Traveler('Pedro', 30, 'Brazil');
console.log(traveler);
console.log(traveler.getGreeting());
console.log(traveler.getDiscription());

const otherTraveler = new Traveler();
console.log(otherTraveler);
console.log(otherTraveler.getGreeting());
console.log(otherTraveler.getDiscription());