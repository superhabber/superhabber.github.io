(function () {

    function loadJs(url) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`head > script[ src = "${url}" ]`) !== null) {
                console.warn(`script already loaded: ${url}`);
                resolve();
            }
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = function (reason) {
                // This can be useful for your error-handling code
                reason.message = `error trying to load script ${url}`;
                reject(reason);
            };
            document.head.appendChild(script);
        });
    }

    loadJs("https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js").then(res => {
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
    }).catch(err => {
        console.log('An error occurred with annyang script loading. Error ' + err)
    });
})