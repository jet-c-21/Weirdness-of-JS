var person = {
    firstname: 'jet',
    lastname: 'c',
    getFullName: function () {
        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }

};

var logName = function (lang1, lang2) {
    // console.log('logged: ' + this.getFullName());
    console.log('logged: ' + person.getFullName());
    console.log('args: ' + lang1 + ' ' + lang2);
    console.log('==========');
};

var logPersonName = logName.bind(person);
logPersonName('en');

// call
logName.call(person, 'en', 'es');

// apply
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
    // console.log('logged: ' + this.getFullName());
    console.log('logged: ' + person.getFullName());
    console.log('args: ' + lang1 + ' ' + lang2);
    console.log('==========');
}).apply(person, ['kk', 'zz']);


// function borrowing
var person2 = {
    firstname: 'puff',
    lastname: 'fu',
};

console.log('!!!!!!!!!!');
console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);
    return a*b;
}

var multiplyByTwoTest = multiply.bind(this, 2, 3);
console.log(multiplyByTwoTest(4)); // 4 will be the extra args

console.log('!!!!!!!!!!');

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));
