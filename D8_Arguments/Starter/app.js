function greet(firstname, lastname, language = 'en', ...other) {
    if(arguments.length === 0) {
        console.log('missing parameters!');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('------------');
}

greet();
greet('zed');
greet('zed', 'v');
greet('zed', 'v', 'en');
greet('zed', 'v', 'en', '21', 'boy');

