mapboxgl.accessToken = 'pk.eyJ1IjoibWFybHViZSIsImEiOiJjanlhbGl1bjgwNDF2M29wNG0yMWx1ZzIyIn0.2CrfetcrmmtTOv2PQVG08A';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-3.123562, 40.413996],
    zoom: 6
});

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );
 
map.on('load', () => {
// Add a data source containing GeoJSON data.
map.addSource('Spain', {
    'type': 'geojson',
    'data': 'data/Municipios_IGN.geojson'
});
 
// Add a new layer to visualize the polygon.
map.addLayer({
'id': 'Spain',
'type': 'fill',
'source': 'Spain', // reference the data source
'layout': {},
'paint': {
'fill-color': '#0080ff', // blue color fill
'fill-opacity': 0.2
}
});
// Add a black outline around the polygon.
map.addLayer({
'id': 'outline',
'type': 'line',
'source': 'Spain',
'layout': {},
'paint': {
'line-color': '#8a9597',
'line-width': 0.3
}
});
});

