// Polyfill
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }

        function F() {}
        F.prototype = o;
        return new F();
    }
}

// pure prototype inheritance
var person = {
    firstName: 'default',
    lastName: 'default',
    greet: function () {
        return 'Hi ' + this.firstName;
    }
};

var jet = Object.create(person);
console.log(jet.greet());

jet.firstName = 'Jet';
jet.lastName = 'C';
console.log(jet.greet());

// person is not constructor!
// var puff = new person();
// console.log(puff);
