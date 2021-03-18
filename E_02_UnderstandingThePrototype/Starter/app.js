var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

// bad syntax
var person2 = {
    self: this, // bad syntax
    firstName: 'default',
    lastName: 'default',
    getFullName: function () {
        return self.firstName + ' ' + self.lastName;
    }
};

var jet = {
    firstName: 'jet',
    lastName: 'c'
};

var puff = {
    firstName: 'puff',
    lastName: 'fu'
};

// don't do this ever! for demo purpose only! this will cause performance problems!!!
puff.__proto__ = person2;
console.log(puff.getFullName());

jet.__proto__ = person; // jet now inherits from person.
console.log(jet.getFullName());
console.log(jet.firstName);

var suga = {
    firstName: 'suga'
};
suga.__proto__ = person;
console.log(suga.getFullName());

// check everything has prototype
var a = {};
var b = function () {
};
var c = [];

console.log('\n');
console.log('======= reflection part: =======');
// reflection part:

// show all properties, including prototype
// for (var prop in jet) {
//     console.log(prop + ': ' + jet[prop]);
// }

for (var prop in jet) {
    if (jet.hasOwnProperty(prop)) {
        console.log(prop + ': ' + jet[prop]);
    }
}

var jane = {
    address: '1st street',
    getFormalFullName: function () {
        return this.lastName + ', ' + this.firstName;
    }
};

var jim = {
    getFirstName : function () {return firstname}
};

_.extend(jet, jane, jim);
console.log(jet);