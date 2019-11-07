<template>
  <div class="markers-index">

    <div v-for="marker in markers">
      <h4>{{ marker.activity_id }}</h4>
      <h4>Start: {{ marker.created_at }}</h4>
      <h4>End: {{ marker.end_time }}</h4>
    
    </div>
   </div>
</template> 




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
        this.markers = response.data; 
      }); 
    },
    methods: {}
}; 
</script>