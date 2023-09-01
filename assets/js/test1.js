var map = L.map('map').setView([12.2659048, 109.1367961], 5);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([12.2659048, 109.1367961]).addTo(map)
    .bindPopup('<b>Nha Trang City!</b><br />I am a popup.').openPopup();

marker.on('click', function(e){
    console.log(e);
    $("#pText").html(e.latlng.toString());
});

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
    $("#pText").html(e.latlng.toString());
    //console.log(e.latlng.lat);
}

map.on('click', onMapClick);

var tree = [{
        text: "Parent 1",
        selectable: true,
        state: {
            expanded: true
        },
        nodes: [{
                text: "Child 1",
                state: {
                    expanded: true
                },
                nodes: [{
                        text: "Grandchild 1"
                    },
                    {
                        text: "Grandchild 2"
                    }
                ]
            },
            {
                text: "Child 2"
            }
        ]
    },
    {
        text: "Parent 2"
    },
    {
        text: "Parent 3"
    },
    {
        text: "Parent 4"
    },
    {
        text: "Parent 5"
    }
];

function getTree() {
    // Some logic to retrieve, or generate tree structure
    return tree;
}

$('#tree').treeview({
    data: getTree(),
    expandIcon: '+',
    collapseIcon: '-',
    onNodeSelected: function(event, data) {
        // Your logic goes here
        console.log(data);
        
        //new bootstrap.Modal(document.getElementById('exampleModal')).show();

    }
});