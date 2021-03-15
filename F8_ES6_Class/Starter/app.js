class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return 'Hi ' + this.firstName;
    }
}

var jet = new Person('Jet', 'C');

console.log(jet);
console.log(jet.greet());

class inFormalPerson extends Person {
    constructor(firstName, lastName){
        super(firstName, lastName);
    }

    yo() {
        return 'hey! yo! ' + this.firstName
    }
}

console.log('======');

var suga = new inFormalPerson('Suga', 'Min');
console.log(suga);
console.log(suga.greet());
console.log(suga.yo());