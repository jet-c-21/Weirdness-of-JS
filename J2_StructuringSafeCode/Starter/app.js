var g = G$('Jet', 'C');

// g.greet().setLang('zh').greet(true).log();
// g.updateGreetOnPage('#greeting');
// g.updateGreetOnPage('#greeting', 1);
// g.updateElement('#greeting', 'lol');


// use our object on the click of the login button
$('#login').click(function() {
    // create a new 'Greetr' object (pretend we know the name from the login)
    var loginGtr = G$('Jet', 'C');

    // hide the login on the screen
    $('#logindiv').hide();

    /*
    fire off an HTML greeting, passing the '#greeting' as
    the selector and the chosen language
    and log the welcome as well
    */
    loginGtr.setLang($('#lang').val()).updateGreetOnPage('#greeting', true).log();
});






