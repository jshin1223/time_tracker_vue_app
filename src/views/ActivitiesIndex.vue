<template>
  <div class="activities-index">

    <div v-for="activity in activities">
      <h2>{{ activity.name }}</h2>
      <router-link v-bind:to="'/activities/' + activity.id">
        <img v-bind:src="activity.image_url" v-bind:alt="activity.name">
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
      activities: []
    };
  },
  created: function() {
    axios 
      .get("/api/activities")
      .then(response => {
        this.activities = activity.data; 
      }); 
    },
    methods: {}
}; 
</script>