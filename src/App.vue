<template>
  <div class="container">
	<v-toolbar>
		<v-toolbar-side-icon></v-toolbar-side-icon>
		<v-toolbar-title>{{ message }}</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
		  <v-btn flat>Link One</v-btn>
		  <v-btn flat>Link Two</v-btn>
		  <v-btn flat>Link Three</v-btn>
		</v-toolbar-items>
	  </v-toolbar>
    <div class="layout row wrap">
        <olMap></olMap>
        <eData></eData>
    </div>
	<div class="text-xs-center">
		<v-btn fab dark small color="primary">
		  <v-icon dark>remove</v-icon>
		</v-btn>

		<v-btn fab dark small color="pink">
		  <v-icon dark>favorite</v-icon>
		</v-btn>

		<v-btn fab dark color="indigo">
		  <v-icon dark>add</v-icon>
		</v-btn>

		<v-btn fab dark color="teal">
		  <v-icon dark>list</v-icon>
		</v-btn>

		<v-btn fab dark large color="cyan">
		  <v-icon dark>edit</v-icon>
		</v-btn>

		<v-btn fab dark large color="purple">
		  <v-icon dark>android</v-icon>
		</v-btn>
  </div>
  </div>
</template>

<script>
import { shareBus } from './main';
import olMap from './components/olMap'
import eData from './components/eData'
export default {
  name: 'App',
  components: {olMap, eData},
  data() {
    return {
      message: 'POC vuejs & Openlayers & Parcel',
    };
  },
};
</script>

<style scoped>
  .container {
    font-family: Roboto;
    width: 100%;
    height: 100%;
  }
</style>