<script>
    import { onMount } from 'svelte';
    import 'ol/ol.css'; 
  
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    import { fromLonLat } from 'ol/proj';
  
    let mapElement;
  
    onMount(() => {
      new Map({
        target: mapElement, 
        layers: [
          new TileLayer({
            source: new OSM(), 
          }),
        ],
        view: new View({
          center: fromLonLat([0, 0]), 
          zoom: 2, 
        }),
      });
    });
  </script>
  
  <style>

    div#map {
      width: 100%;
      height: 500px;
    }
  </style>
  
  <div id="map" bind:this={mapElement}></div> 
  