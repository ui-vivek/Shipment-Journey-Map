const startCoordinates = [19.0760, 72.8777];  // A
const currentCoordinates = [-36.802237, 12.913736];  // B
const endCoordinates = [40.7128, -74.0060];  // C

const map = L.map('map').setView(startCoordinates, 2);  

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

const startMarker = L.marker(startCoordinates).addTo(map).bindPopup('Start Point: Mumbai').openPopup();
const currentMarker = L.marker(currentCoordinates).addTo(map).bindPopup('Current Location');
const endMarker = L.marker(endCoordinates).addTo(map).bindPopup('End Point: New York');

const polyline = L.polyline([startCoordinates, currentCoordinates, endCoordinates], {color: 'blue'}).addTo(map);

map.fitBounds(polyline.getBounds());
