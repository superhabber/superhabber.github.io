
if (annyang) {

    var commands = {
        'hello': () => {console.log('hello')},
        'site click *tag':click
    };

    var click = function (tag) {
        console.log(tag);
    }

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}
