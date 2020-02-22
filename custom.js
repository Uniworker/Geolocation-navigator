/*
    Realization of geolocation logic
*/
$(document).ready(function () {
    $("button").click(function () {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            printCoordinates(geoip2.latitude, geoip2.longitude, geoip2.accuracy, true);
        }
    })
})

function geoSuccess(position) {
    printCoordinates(position.coords.latitude, position.coords.longitude, position.coords.accuracy, true);
}

function geoError(err) {
   printCoordinates(geoip2.latitude, geoip2.longitude, geoip2.accuracy, true);
}

function printCoordinates(lat, long, acc, isMaxMind) {
    $('body').append('<p>Latitude: ' + lat + '</p>');
    $('body').append('<p>Longitude: ' + long + '</p>');
    $('body').append('<p>Accuracy: ' + acc + ' meters</p>');
    if (isMaxMind) {
        $('body').append('<p><a href="https://www.maxmind.com/en/home" target="_blank"></a></p>');
    }
}

function error(msg) {
    alert(msg);
}