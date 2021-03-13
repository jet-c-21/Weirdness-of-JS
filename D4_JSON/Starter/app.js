var obj = {
    name: 'jet',
    age: 21
};

console.log(JSON.stringify(obj));

var jsonFromStr = JSON.parse('{"name":"puff","age":19}');
console.log(jsonFromStr);

