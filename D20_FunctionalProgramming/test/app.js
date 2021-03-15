function mapForEachOrigin(arr, func) {
    var newArr = [];
    console.log('input arr: ' + arr);
    console.log('input func: ' + func);
    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr;
}

function mapForEach(arr, func) {
    var newArr = [];

    console.log('func: ' + func);
    console.log('input arr: ' + arr);
    console.log('input func: ' + func);
    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr;
}

var checkItem = function (limiter) {
    return function (item) {
        return item > limiter
    };
};

var arr1 = [1, 2, 3];
var x = mapForEach(arr1, checkItem(1));
console.log(x);

console.log('=============');

var checkPassLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var arr5 = mapForEach(arr1, checkPassLimitSimplified(2));
console.log(arr5);