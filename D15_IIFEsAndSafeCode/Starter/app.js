// IIFE
var firstname = 'John';

(function (global, name) {

    var greeting = 'Hello';
    global.greeting = 'xddd';
    console.log(greeting + ' ' + name);

}(window, firstname)); // IIFE

console.log(greeting);






















