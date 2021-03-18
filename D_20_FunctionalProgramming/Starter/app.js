function mapForEach(arr, func) {
    var newArr = [];

    console.log('input arr: ' + arr);
    console.log('input func: ' + func);

    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }

    return newArr;
}

var arr1 = [1,2,3];

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item < 2;
});

console.log(arr3);


var checkPassLimit = function(limiter, item) {
    return item > limiter;
};

var arr4 = mapForEach(arr1, checkPassLimit.bind(this, 1));
console.log(arr4);


var checkItem = function(limiter) {
    var self = this;

};

var arr5 = mapForEach(arr1, checkItem(1));





// var checkItem = function(limiter) {
//     var newArr = [];
//     for (var i = 0; i < this.arr1.length; i++) {
//         newArr[i] = this.arr1[i] > limiter;
//     }
//     return newArr;
// };
// var x = checkItem(2);
// console.log(x);