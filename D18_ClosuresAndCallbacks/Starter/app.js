function sayHiLater() {
    var greeting = 'hi!';
    setTimeout(function () {
        console.log(greeting);
    }, 3000)
}

sayHiLater();

function tellMeWhenDone(callback) {
    var a = 1000;// some work
    var b = 2000; //some work
    console.log(b);

    callback();
}

tellMeWhenDone(function() {
    console.log('I am down');
});

tellMeWhenDone(function() {
    console.log('all down!!!');
});