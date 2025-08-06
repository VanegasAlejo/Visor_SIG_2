const mapa = L.map('mapa').setView([4.6238922, -74.0615739], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

// Cargar archivo GPX
new L.GPX('ruta.gpx', {
  async: true,
  marker_options: {
    startIconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    endIconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  }
}).on('loaded', function(e) {
  mapa.fitBounds(e.target.getBounds());
}).addTo(mapa);
