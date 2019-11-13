<template>
  <div class="activities-index">
    <div class="container">
      <div class="row">
        <div class="p-4 col-lg-2"  v-for="activity in activities" v-on:click="triggerMarker(activity)">
          <div v-bind:class="{'marker-on': activity.marker.id }" class="button-div-fill">
            
            <img class="img-fluid" v-bind:src="activity.image_url" v-bind:alt="activity.name"> 
          
            <h4>{{ activity.name }}</h4>
          </div>
      
        </div>
      </div>
    </div>


  </div>  
</template> 

<style>
.marker-on {
  background-color: green;
}

.button-div-fill {
  padding: 10px;
  border-radius: 10px;
  border: solid 1px black;
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
        this.activities = response.data; 
      }); 
    },
    methods: {
      triggerMarker: function(activity) {
        axios
          .post("/api/activities/" + activity.id + "/markers")
          .then(response => {
            console.log(response.data);
            activity.marker = response.data.marker;
          });
      }
    }
}; 
</script>