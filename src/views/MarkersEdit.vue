<template>
  <div class="markers-edit">
    <h1>Edit Marker</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        User Id: <input type="text" v-model="marker.user_id">
      </div>

      <div>
        Activity Id: <input type="text" v-model="marker.activity_id">
      </div>


      <div>
        End Time: <input type="text" v-model="marker.end_time">
      </div>


      <input type="submit" value="Update">
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
      markers: {}
    };
  },
  created: function() {
    axios
      .get("/api/markers/")
      .then(response => {
        this.markers = response.data;
      });
  },
  methods: {
    submit: function() {
      var clientParams = this.marker;
      axios
        .patch("/api/markers/" + this.$route.params.id, clientParams)
        .then(response => {
          this.$router.push("/markers/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>