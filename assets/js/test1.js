var map = L.map('map').setView([12.2659048, 109.1367961], 5);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([12.2659048, 109.1367961]).addTo(map)
    .bindPopup('<b>Nha Trang City!</b><br />I am a popup.').openPopup();

var circle = L.circle([12.2469389, 109.1657535], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 300
}).addTo(map).bindPopup('I am a circle.');

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map).bindPopup('I am a polygon.');


var popup = L.popup()
    .setLatLng([12.2659048, 109.1367961])    
    .setContent('I am a standalone popup.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)  
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
    map.setView([e.latlng.lat, e.latlng.lng], 13);
    //console.log(e.latlng.lat);
}

map.on('click', onMapClick);