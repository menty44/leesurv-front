<template>
  <div class="row">
    <div class="col-md-12">

      <div>
        <highcharts :options="chartOptions"></highcharts>
        <highcharts :options="chart"></highcharts>
      </div>
    </div>
  </div>



</template>

<script>
import { defineComponent } from 'vue'
// import Menu from "../menu/Menu";

export default defineComponent({
  setup() {
  },
  data() {
    return {
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      },
      chart: {
        chart: {
          type: 'area'
        },
        title: {
          text: 'Area chart with negative values'
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
        }, {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
        }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
        }]
      }
    }
  }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
