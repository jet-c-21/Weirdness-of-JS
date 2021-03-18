// using a function expression
var greetFunc = function (name) {
    console.log('Hello ' + name);
};

greetFunc('V');

// using an Immediately Invoked Function Expression (IIFE)
var greeting_test = function (name) {
    console.log('Hello ' + name);
}();

var greeting = function (name) {
    return 'Hello ' + name;
}('jj');
console.log(greeting);

// to trick the syntax parser
(function (name) {
    return 'Hello ' + name;
});

(function (name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting, name);
    console.log(greeting + ' ' + name);
}('zzz'));


