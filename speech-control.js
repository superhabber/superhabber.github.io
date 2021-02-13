(function () {

    var x = document.createElement('script');
    x.src = 'https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js';
    document.getElementsByTagName("head")[0].appendChild(x).then(() => {
        console.log("got it")
    });

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