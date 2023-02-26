

<script>

import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import NavBar from "../components/NavBar.vue";
import Logo from "../components/Logo.vue";
export default {
    data() {
        return {

        };
    },
    mounted() {
        mapboxgl.accessToken = "pk.eyJ1IjoiaGVjdG9yc29zYTE5IiwiYSI6ImNsNG90a2p6ODAzYmczZG9lY3FvM2N6dzYifQ.GOmnDeuRRwaNMu5vX5UuVQ";
        const geojson = {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-69.89232, 18.47186]
        },
        'properties': {
        'title': 'Mapbox',
        'description': 'Dominican Republic'
        }
        }
        ]
        };
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-69.9618268, 18.4706186],
            zoom: 9 // starting zoom
            
        });
        // add markers to map
      for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
      `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
      )
      .addTo(map);
      }
    },
    components: { 
      NavBar, 
      Logo 
      },
};
</script>

<template>
  <div>
    <hr />
    <NavBar/>
    <Logo/>
    <div id="map"></div>
  </div>
</template>

<style>
body {
margin: 0;
padding: 0;
}
#map {
position: absolute;
top: 0;
bottom: 0;
width: 100%;
}
.marker {
background-image: url('../assets/location.png');
background-size: cover;
width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;
}
.mapboxgl-popup {
max-width: 200px;
}
.mapboxgl-popup-content {
text-align: center;
font-family: 'Open Sans', sans-serif;
}
</style>