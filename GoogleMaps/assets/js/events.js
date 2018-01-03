// Check if document is ready
document.addEventListener('DOMContentLoaded', initGMaps, false);
// Set some global vars
var userLoc = {},
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
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    document.body.appendChild(script);
    loadMap();
}

function loadMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
    getUserLocation();
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showUserLocation);
    } else {
        console.log('Can\'t find position of user');
    }
}

function showUserLocation(position) {
    userLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    map.setCenter(userLoc);
    map.setZoom(14);
    createMarker(userLoc);
}

function createMarker(position) {
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });

    createInfoWindow(marker, '<p>Dit is je huidige locatie</p>');
}

function createInfoWindow(marker, content) {
    var infowindow = new google.maps.InfoWindow({
        content: content
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}