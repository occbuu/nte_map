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

var polygon = L.polygon([
    [12.258967, 109.189033],
    [12.258141, 109.193836],
    [12.259727, 109.198401],
    [12.254175, 109.196609],
    [12.253382, 109.196440],
    [12.241320, 109.196405],
    [12.247186, 109.189133],
    [12.249245, 109.182841],
    [12.250423, 109.184730],
    [12.251678, 109.186114],
    [12.252972, 109.189855],
    [12.256767, 109.188544]    
]).addTo(map).bindPopup('Trung tâm hành chính Nha Trang.');


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

location1 =[
    {
        name:"Trung tâm hành chính TP. Nha Trang",
        lat:12.244461,
        lng:109.1835409, 
        level:15
    },   
    {
        name:"Telecommunications University",
        lat:12.283665, 
        lng:109.199666, 
        level:15
    },
    {
        name:"Trường Đại học Nha Trang",
        lat: 12.268508, 
        lng: 109.202323, 
        level:15
    },
];

location2 =[
    {
        name:"Champa Island Nha Trang - Resort Hotel & Spa",
        lat:12.2639514,
        lng:109.1692024, 
        level:15
    },
    {
        name:"Muong Thanh Luxury Vien Trieu Hotel",
        lat:12.2708335,
        lng:109.1900314, 
        level:15
    },
    {
        name:"Scenia Bay Nha Trang",
        lat:12.2757632,
        lng:109.1831937, 
        level:15
    },
];

location3 =[
    {
        name:"Chùa Từ Tôn",
        lat: 12.266679, 
        lng: 109.208184, 
        level: 17
    },
    {
        name:"Sunrise Beach",
        lat:12.250322, 
        lng:109.196685, 
        level:16
    },
    {
        name:"Quảng trường 2-4",
        lat:12.239281, 
        lng:109.197221, 
        level:17
    },
];

function goTo(name, lat, lng, level){
    var marker = L.marker([lat,lng]).addTo(map)
    .bindPopup(name).openPopup();
    map.setView([lat, lng], level);
    $("#pText").html("Latitude: " + lat.toString() + "; Longitude: " + lng.toString());
}

$(function() {
    //console.log( "ready!" );    
    $("#listGroup1").html("");
    $('#locationTemplate').tmpl(location1).appendTo('#listGroup1');
    $("#listGroup2").html("");
    $('#locationTemplate').tmpl(location2).appendTo('#listGroup2');
    $("#listGroup3").html("");
    $('#locationTemplate').tmpl(location3).appendTo('#listGroup3');
});