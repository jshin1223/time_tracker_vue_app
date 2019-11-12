 <template>
  <div class="donut">
    <h2 class="m-4">Activities Percentages</h2>
    <div class="d-flex justify-content-center">
      <apexchart type="donut" width=380 :options="chartOptions" :series="series" />
    </div>
  </div>

</template>

<style>
</style>

<script>
import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'
var axios = require('axios');

export default {
  data: function() {
    return {
      activities: [],
      series: [], // this will be the integer for seconds (in order of the activities below)
      chartOptions: {
        chart: {
          type: 'donut'
        },
        colors: ['#FF8C31', '#009AE4', '#E95453', '#ADACDA', '#6B505B', '#FED2A4', '#8597CB', '#418DFF', '#A9BA5A', '#464655', '#80E0DC', '#009AE4', '#D2D5D7', '#E2780C', '#E63950', '#1A4044', '#00A8B0', '#40596B'],
        labels: [], // activity names
        plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true,
                    color: 'black',
                    fontSize: '30px'
                  },
                  value: {
                    formatter: function(totalSeconds) {

                      var hours = Math.floor(totalSeconds / 3600);
                      var leftOverSeconds = totalSeconds % 3600;

                      var minutes = Math.floor(leftOverSeconds / 60);
                      var seconds = leftOverSeconds % 60;

                      var timeString = "";

                      if (hours > 0) {
                        timeString += (hours + " Hour")
                        if (hours !== 1) {
                          timeString += "s";
                        }
                      }

                      if (hours > 0 && minutes > 0) {
                        timeString += ", ";
                      }

                      if (minutes > 0) {
                        timeString += (minutes + " Minute")
                        if (minutes !== 1) {
                          timeString += "s";
                        }
                      }

                      if (seconds > 0 && minutes > 0) {
                        timeString += ", ";
                      }

                      if (seconds > 0) {
                        timeString += (seconds + " Second")
                        if (seconds !== 1) {
                          timeString += "s";
                        }
                      }

                      if (timeString == "") {
                        timeString = "0 seconds";
                      }

                      
                      return timeString;
                    }
                  }
                }
              }
            }
          },
        responsive: [{
          breakpoint: 1480,
          options: {
            chart: {
              width: 700
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  },
  components: {
    apexchart: VueApexCharts,
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        // this.series = response.data.activities; 
        this.activities = response.data.activities; 
        this.activities.forEach(activity => {
          this.chartOptions.labels.push(activity.name);
          this.series.push(activity.total_seconds);
        });
      });
  },
  methods: {}
}
</script>