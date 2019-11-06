<template>
  <div class="activities-index">

    <div v-for="activity in activities">
    
      <router-link v-bind:to="'/activities/' + activity.id"> 
        <img v-bind:src="activity.image_url" v-bind:alt="activity.name"> 
      </router-link>
      
    <h2>{{ activity.name }}</h2>
  
    </div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  </div>  
</template> 


    

<style>
  img {
    width: 150px;
  }
</style>

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
        console.log(response.data)
        this.activities = response.data; 
      }); 
    },
    methods: {}
}; 
</script>