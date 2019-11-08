<template>
  <div class="users-index">

    <div v-for="user in users">
      <h4>{{ user.name }}</h4>
      <h4>{{ user.activities }}</h4>
    
    </div>
  </div>
</template> 




<script>
var axios = require('axios');

export default {

  data: function () {
    return {
      users: []
    };
  },
  created: function() {
    axios 
      .get("/api/users")
      .then(response => {
        this.users = response.data; 
      }); 
    },
    methods: {}
}; 
</script>