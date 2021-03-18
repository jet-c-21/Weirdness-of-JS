// let's add a new feature to all strings in javascript
String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
};

console.log('jet'.isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
    return this > 0;
};

console.log(Number(2).isPositive());
console.log(Number(2));

// you should not use function constructors for the primitive type
var x = new Number(3);
var y = 3;
var z = Number('3');
console.log(x, y);
console.log('x == y : ', x == y);
console.log('x == z : ', x == z);
console.log('y == z : ', y == z);
console.log('x === y : ', x === y);
console.log('x === z : ', x === z);
console.log('y === z : ', y === z);
