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
                <v-img
                  :src="feature.properties.photo"
                  height="200px"
                >
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
    var src = "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=lycee&outputFormat=application/json&srsName=EPSG:4326";
    axios.get(src)
    .then(response => {
      // JSON responses are automatically parsed.
      this.features = response.data.features;
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>

