let contactmap
= L.map('contactmapcss').setView([51.23019527711804, 4.417068455962269,], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(contactmap);

let ciscoIcon = L.icon({
    iconUrl: './assets/images/unityneticon.png',
    shadowUrl: './assets/images/unityneticon.png',

    iconSize:     [60, 60],
    shadowSize:   [60, 60],
    iconAnchor:   [0, 60],
    shadowAnchor: [0, 60],
    popupAnchor:  [0, 0]
});

L.marker([51.23019527711804, 4.417068455962269], {icon: ciscoIcon}).addTo(contactmap);