function greet(whattosay) {
    return function (name) {
        console.log(whattosay + ' ' + name);
    }
}

// greet('hi')('v');

var sayHi = greet('hi');
sayHi('v');

