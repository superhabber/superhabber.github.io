(function () {

    fetchInject([
        'https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js'
    ]).then(() => {

        console.log("YEAH")

        if (annyang) {
            var commands = {

                'show me *tag': showFlickr
            };

            var showFlickr = function (tag) {
                var url = 'http://api.flickr.com/services/rest/?tags=' + tag;
                $.getJSON(url);
            }

            // Add our commands to annyang
            annyang.addCommands(commands);

            // Start listening. You can call this here, or attach this call to an event, button, etc.
            annyang.start();
        }
    })


})