<template>
  <div class="activities-edit">
    <h1>Edit Activity</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" v-model="activity.name">
      </div>

      <div>
        Priority: <input type="text" v-model="activity.priority">
      </div>


      <div>
        Image Url: <input type="text" v-model="activity.image_url">
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
      activity: {}
    };
  },
  created: function() {
    axios
      .get("/api/activities/" + this.$route.params.id)
      .then(response => {
        this.activity = response.data;
      });
  },
  methods: {
    submit: function() {
      var clientParams = this.activity;
      axios
        .patch("/api/activities/" + this.$route.params.id, clientParams)
        .then(response => {
          this.$router.push("/activities/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>