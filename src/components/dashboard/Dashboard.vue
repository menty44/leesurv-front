<template>
  <div class="row">
    <div class="col-md-12">
      <div style="padding: 2.5%">
      <el-row :gutter="12">

        <el-col :span="6" >
          <el-card shadow="always" style="background: deeppink; color: white;">

            <span style="float:left;">
              <i class="el-icon-setting"></i>
               Users
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>

          </el-card>
        </el-col>

        <el-col :span="6" >
          <el-card shadow="always" style="background: #0f3a03; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Roles
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6" >
          <el-card shadow="always" style="background: #450fa2; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Permissions
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: #9b1f09; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Countries
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

      </el-row>
    </div>

      <div style="padding: 2.5%">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="always" style="background: #8c5d02; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Menus
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: #162d8a; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Surveys
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: #026559; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Organizations
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: #d358ee; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Amount Disbursed
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>
      </el-row>
    </div>

      <div style="padding: 2.5%">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="always" style="background: #000000; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               SMS Participation
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: #595021; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Users Rewarded
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: #5d00f8; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Web participation
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" style="background: red; color: white;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Blocked Users
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>
      </el-row>
    </div>

      <div style="padding: 2.5%">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="always" style="background: #000000; color: #39f804;">
             <span style="float:left;">
              <i class="el-icon-setting"></i>
               Active Users
            </span>
            <span style="font-size: 70px; font-weight: bold; float: right">0</span>
          </el-card>
        </el-col>

<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" style="background: red; color: white;">-->
<!--             <span style="float:left;">-->
<!--              <i class="el-icon-setting"></i>-->
<!--               Web participation-->
<!--            </span>-->
<!--            <span style="font-size: 70px; font-weight: bold; float: right">0</span>-->
<!--          </el-card>-->
<!--        </el-col>-->

<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" style="background: #595021; color: white;">-->
<!--             <span style="float:left;">-->
<!--              <i class="el-icon-setting"></i>-->
<!--               Users Rewarded-->
<!--            </span>-->
<!--            <span style="font-size: 70px; font-weight: bold; float: right">0</span>-->
<!--          </el-card>-->
<!--        </el-col>-->

<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" style="background: #5d00f8; color: white;">-->
<!--             <span style="float:left;">-->
<!--              <i class="el-icon-setting"></i>-->
<!--               Users-->
<!--            </span>-->
<!--            <span style="font-size: 70px; font-weight: bold; float: right">0</span>-->
<!--          </el-card>-->
<!--        </el-col>-->
      </el-row>
    </div>
    </div>
  </div>



</template>

<script>
import { defineComponent } from 'vue'
import {axiosGET, axiosPOST} from '../../services/apiProcessor'
// import Menu from "../../menu/Menu";

export default defineComponent({
  setup() {
    console.log(axiosGET())
    console.log(axiosPOST())
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
