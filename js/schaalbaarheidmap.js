let schaalbaarheidmap
= L.map('schaalbaarheidmappcss').setView([50.88681777378476, 4.448470761776503], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(schaalbaarheidmap);

let ciscoIcon = L.icon({
    iconUrl: './assets/images/cisco.jpeg',
    shadowUrl: './assets/images/cisco.jpeg',

    iconSize:     [60, 60],
    shadowSize:   [60, 60],
    iconAnchor:   [0, 60],
    shadowAnchor: [0, 60],
    popupAnchor:  [0, 0]
});

L.marker([50.88681777378476, 4.448470761776503], {icon: ciscoIcon}).addTo(schaalbaarheidmap);