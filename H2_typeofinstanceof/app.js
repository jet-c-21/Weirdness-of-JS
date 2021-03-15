var a = 3;
console.log('var a = 3; typeof a:', typeof a);
console.log(Object.prototype.toString.call(a)); // better!

var b = "Hello";
console.log('var b = "Hello"; typeof b:', typeof b);

var c = {};
console.log(typeof c);
console.log('var c = {}; typeof c:', typeof c);

var d = [];
console.log('var d = []; typeof d:', typeof d);
console.log('Object.prototype.toString.call(d)',
    Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log('var e = new Person(\'Jane\');', typeof e);
console.log('e instanceof Person', e instanceof Person);

console.log('typeof undefined', typeof undefined); // makes sense

console.log('typeof null', typeof null); // a bug since, like, forever...

var z = function () {
};
console.log(typeof z);

