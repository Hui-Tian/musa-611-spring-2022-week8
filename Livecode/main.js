var map = L.map('map').setView([39.95, -75.16], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/tiantianup/cl0r2nvmw000714laafv2ufl5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGlhbnRpYW51cCIsImEiOiJja2MzZThibzEwOTAyMnF0Z2syeWszN3J6In0.gp4Ekf3SFQdYe605993jQA', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
