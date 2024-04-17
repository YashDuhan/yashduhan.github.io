// Age Function
function me_when() {
    var a = new Date(2004, 11, 14);
    var b = new Date();
    var c = b - a;
    var d = c / (1000 * 60 * 60 * 24 * 365.25);
    document.getElementById('my_age').innerHTML = '' + Math.floor(d) + '.' + (d % 1).toFixed(9).substr(2);
}

setInterval(me_when, 1);

// Pre-Loader
document.addEventListener("DOMContentLoaded", function() {
    var font = new FontFace('Voyage', 'url(../font/Voyage-Regular.ttf)');
    font.load().then(function(loadedFont) {
        document.fonts.add(loadedFont);
        startPreloader();
    }).catch(function(error) {
        console.log('Font loading failed: ' + error);
        startPreloader();
    });
});

function startPreloader() {
    var counter = document.getElementById("counter");
    var percent = 0;
    var interval = setInterval(function() {
        percent++;
        counter.textContent = percent + "%";
        if (percent >= 100) {
            clearInterval(interval);
            // Once loading is complete, hide the loader
            document.getElementById("loader").style.display = "none";
        }
    }, 20);
}
