<template>
  <v-layout justify-center>
    <v-flex xs12 sm12>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="feature in features"

            >
              <v-card>
                <v-img v-if="feature.properties.photo" :src="feature.properties.photo" height="200px" >
                 <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="feature.properties.nom"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios';
import { shareBus } from '../main';

export default {
  name: "eData",
  data() {
    return {
      features: [],
      errors: []

    }
  },

  // Fetches posts when the component is created.
  created() {
    var src = "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=lycee&outputFormat=application/json&srsName=EPSG:3857";
    axios.get(src)
    .then(response => {
      // JSON responses are automatically parsed.
      var _fixed = response.data;
      //Fix no photo link
      _fixed.features.forEach(function(f) {
      console.log(f.properties.photo);
        if (!f.properties.photo) {
            f.properties.photo = "https://www.bretagne-economique.com/sites/default/files/styles/actualites/public/geo_bretagne_1.jpg";
        }
      });
      this.features = _fixed.features;
      shareBus.$emit('featuresLoaded', _fixed);
    })
    .catch(e => {
      console.lo(e)
    })

    shareBus.$on('featuresFiltered', (featuresIDs) => {
        console.log("Ca bouge !", featuresIDs);
    });

  }
}
</script>

