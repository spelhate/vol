<template>
  <div id="map"></div>
</template>

<script>
  import 'ol/ol.css';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import TileLayer from 'ol/layer/Tile.js'
  import {defaults as defaultControls, ZoomToExtent} from 'ol/control.js';
  import GeoJSON from 'ol/format/GeoJSON.js';
  import {Vector as VectorLayer} from 'ol/layer.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';




  import { shareBus } from '../main';


  export default {
    name: "olMap",
    data() { return {
            features: []
        }
    },
    mounted() {
      shareBus.$on('featuresLoaded', (features) => {
       this.features = features;
       var vectorSource = new VectorSource({
          features: (new GeoJSON()).readFeatures(this.features)
       });
       var vectorLayer = new VectorLayer({
        source: vectorSource
      });
      map.addLayer(vectorLayer);
      var extent = vectorSource.getExtent();
      map.getView().fit(extent, map.getSize());
      });


      let map = new Map({
        target: 'map',
        controls: defaultControls().extend([
          new ZoomToExtent({
            extent: [
              813079.7791264898, 5929220.284081122,
              848966.9639063801, 5936863.986909639
            ]
          })
        ]),
        layers: [
          new TileLayer({source: new OSM()})
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import "ol/ol.css"
  #map
    height 100%;
</style>