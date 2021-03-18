function a() {
    console.log(this);
    this.xxx = 'lol';
}

var b = function() {
    console.log(this);
};


a();

console.log(xxx);

b();

console.log("============== for c part =====================");

var c = {
    name : 'The c object',
    log: function () {
        this.name = 'new name';
        console.log(this);

        var setName = function(newName) {
            this.name = newName;
        };

        setName('updated again! the c object');
        console.log(this);
    }
};

c.log();

var myObj = {
    name : 'The c object',
    log: function () {
        var self = this;
        self.name = 'lalala';
        console.log(self);

        var setName = function(newName) {
            self.name = newName;
        };

        setName('updated again! the c object');
        console.log(self);
    }
};

myObj.log();