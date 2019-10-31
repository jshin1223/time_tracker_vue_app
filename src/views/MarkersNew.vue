<template>
  <div class="markers-new">
    <h1>New Marker</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        User Id: <input type="text" v-model="newMarkerUserId">
      </div>

      <div>
        Activity Id: <input type="integer" v-model="newMarkerActivityId">
      </div>

      <div>
        End Time: <input type="text" v-model="newMarkerEndTime">
      </div>

 

      <input type="submit" value="Create">
    </form>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      errors: [],
      newMarkerUserId: "",
      newMarkerActivityId: "",
      newMarkerEndTime: ""
     
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var clientParams = {
        user_id: this.newMarkerUserId,
        activity_id: this.newMarkerActivityId,
        end_time: this.newMarkerEndTime
 
      };
      axios
        .post("/api/markers", clientParams)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>