// Check if document is ready
document.addEventListener('DOMContentLoaded', initGMaps, false);
// Set some global vars
var latlong = [],
map;
// Run this function when document is ready
function initGMaps() {
    var GoogleMapsApiKey = 'AIzaSyCZGeazgE63iltNQq36Bq9peje-1-D7vw4';
    var CallBack = 'loadMap';
    var script = document.createElement('script');
    script.src = [
        'https://maps.googleapis.com/maps/api/js?v=3.exp',
        'libraries=geometry,places',
        'callback=' + CallBack,
        'language=nl',
        'key=' + GoogleMapsApiKey
    ].join('&');
    document.body.appendChild(script);
    loadMap();
}

function loadMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showUserLocation);
    } else {
       latlong.push(-34.397);
       latlong.push(150.644);
    }
}

function showUserLocation(position) {
    var lat = parseFloat(position.coords.latitude, 3);
    var long = parseFloat(position.coords.longitude, 3);

    latlong.push(lat);
    latlong.push(long);
}