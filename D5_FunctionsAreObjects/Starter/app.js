// function statement
function greet() {
    console.log('hi');
}

greet.lang = 'en';

var x = greet;

console.log(anonymousGreet); // undefined

anonymousGreet(); // error

// function expression
var anonymousGreet = function () {
    console.log('hello!')
};

console.log(x);
console.log(anonymousGreet);
console(anonymousGreet());


// console.log(greet);