// by value
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference
var c = { greeting: 'hi'};
var d = c;

d = c;
c.greeting = 'zzz';

console.log(c);
console.log(d);

// even as parameter
function changeGreeting(obj) {
    obj.greeting = 'xd!'
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = {greeting: 'shit'};
console.log(c);
console.log(d);

/*
In JavaScript,
all primitive types are by value,
and all objects are by reference
*/