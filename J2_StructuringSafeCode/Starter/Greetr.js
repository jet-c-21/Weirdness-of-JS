// the prefixed ";" helps to prevent the incompleteness of other code
;(function (global, $) {
    // 'new' the object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // >>>>>> hidden property to the outside >>>>>>
    // language option
    var supportedLanguage = ['en', 'zh'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        zh: '嗨'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        zh: '你好',
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        zh: '已登入'
    };
    // <<<<<< hidden property to the outside <<<<<<

    // use prototype to holds methods (to save memory space)
    Greetr.prototype = {
        // 'this' refers to the calling object at execution time
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        // check if it is a valid language
        validate: function () {
            // reference the externally inaccessible 'supportedLanguage' within the closure
            if (supportedLanguage.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },

        // retrieve message from object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function (formal) {
            var msg;

            // if formal is undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // makes the method chainable
            return this;
        },

        setLang: function (lang) {
            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        // update text of the HTML tag (element)
        updateElement: function (selector, text) {
            $(selector).text(text);
        },

        updateGreetOnPage: function (selector, formal) {
            var self = this;
            var renderText;

            if (!$) {
                throw 'jQuery is not loaded';
            }

            if (!selector) {
                throw 'missing jQuery selector';
            }

            // determine the message
            if (formal) {
                renderText = self.formalGreeting();
            } else {
                renderText = self.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).text(renderText);
            // $(selector).html(renderText);

            // dont forget to make this chainable
            return this;
        }
    };

    // the actual object is created at here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'default';
        self.lastName = lastName || 'default';
        self.language = language || 'en';

        self.validate();
    };

    // trick borrowed from jQuery, so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;


}(window, $));
