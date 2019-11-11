<template>
  <div class="users-show">
    <h1 class="text-center mt-5">{{ user.name }}</h1>

            <section class="margin-t-30">
            <div class="container">

                <div class="row">
                    <div class="col-lg-4" v-for="activity in user.activities">
                        <div class="service-box">
                            <div class="service-icon">
                                <img class="img-custom" v-bind:src="activity.image_url" alt="">
                            </div>
                            <h4 class="text-uppercase service-title mt-3">{{ activity.name }}: {{ activity.formatted_time }}</h4>
                        </div>
                    </div>
                </div>

            </div> <!-- end container -->
        </section>
  </div>
</template>

<style>
.img-custom {
  height: 50px;
  width: 50px;
}
</style>





<script>
var axios = require('axios');


export default {
  data: function() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        activities: [
          {
            name: "", 
            id: "", 
            total_seconds: "",
            time_data: {
              hours: 0,
              minutes: 0,
              seconds: 0
            },
            formatted_time: ""
          }
        ]
      }
    }; 
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.user = response.data; 
      });
  },
  methods: {
  } 
};
</script>