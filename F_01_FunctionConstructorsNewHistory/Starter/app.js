function Person(firstName, lastName) {

    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('this function is invoked');
}

Person.prototype.getFullName = function() {
    return this.fullName + ' ' + this.lastName;
};

var jet = new Person('Jet', 'C');
console.log(jet);

var puff = new Person('Puff', 'Fu');
console.log(puff);

console.log(jet.getFullName);
console.log(jet.getFormalFullName);

Person.prototype.getFormalFullName = function() {
    return this.lastName + ', ' + this.firstName;
};
console.log(jet.getFormalFullName);
console.log(jet.getFormalFullName());