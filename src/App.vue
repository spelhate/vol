<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <olMap></olMap>
  </div>
</template>

<script>
import olMap from './components/olMap'
export default {
  name: 'App',
  components: {olMap},
  data() {
    return {
      message: 'POC vuejs & Openlayers & Parcel',
    };
  },
};
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>