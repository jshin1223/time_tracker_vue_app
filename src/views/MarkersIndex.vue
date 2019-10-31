<template>
  <div class="markers-index">

    <div v-for="marker in markers">
      <h2>{{ marker.name }}</h2>
      <router-link v-bind:to="'/markers/' + marker.id">
        <img v-bind:src="marker.image_url" v-bind:alt="marker.name">
      </router-link>
    </div>
  </div>  
</template> 


<style>
img {
  width: 250px;
}  
</style>grid-column: 

<script>
var axios = require('axios');
export default {

  data: function () {
    return {
      markers: []
    };
  },
  created: function() {
    axios 
      .get("/api/markers")
      .then(response => {
        this.markers = marker.data; 
      }); 
    },
    methods: {}
}; 
</script>