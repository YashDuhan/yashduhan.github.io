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
