Array.prototype.myCustomFeature = 'xd!';

var arr = ['jet', 'puff', 'suga'];

// do not use for in to iterate an Array!
for (var prop in arr) {
    console.log(prop + ': ' + arr[prop])
}

// it's a safer way
for (var i = 0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i])
}

