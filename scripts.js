mapboxgl.accessToken = 'pk.eyJ1IjoidHJpZ2VvIiwiYSI6ImNsZHZ5YW9tYjAyODAzdXM4bHlwbjhnNm4ifQ.kHTDG7XT7noaK7zzYwHYbA'; // replace this with your access token

// Map
var map = new mapboxgl.Map({
    container: 'map', // id of your map container
    style: 'mapbox://styles/mapbox/streets-v12', // your map style
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});

// Geocoder
var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: 'Search for places' // Placeholder text for the search bar
});

map.addControl(geocoder); // Add the geocoder to the map

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    }
}));

// Fullscreen
map.addControl(new mapboxgl.FullscreenControl());
