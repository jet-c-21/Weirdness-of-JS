function buildFunctionsEs6() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        // for es6+
        let j = i; // create a new var in memory
        arr.push(
            function () {
                console.log(j);
            }
        );
    }

    return arr;
}

var fs = buildFunctionsEs6();
fs[0]();
fs[1]();
fs[2]();
console.log('=====');


function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}

fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
console.log('=====');
