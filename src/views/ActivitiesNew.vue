<template>
  <div class="activities-new">
    <h1>New Activity</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" v-model="newActivityName">
      </div>

      <div>
        Priority: <input type="integer" v-model="newActivityPriority">
      </div>

      <div>
        Image Url: <input type="text" v-model="newActivityImageUrl">
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
      newActivityName: "",
      newActivityPriority: "",
      newActivityImageUrl: ""
     
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var clientParams = {
        name: this.newActivityName,
        priority: this.newActivityPriority,
        image_url: this.newActivityImageUrl
 
      };
      axios
        .post("/api/activities", clientParams)
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