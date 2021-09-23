<template>
  <div class="container">
    <div class="row">
      <div class="col border-end border-info">
        <img class="img-fluid" src="../assets/SRVeY.png">
      </div>
      <div class="col">

        <div style="padding-left: 5%; padding-top: 30%">

          <el-row :gutter="12">
            <el-col :span="24">
              <el-card shadow="always">

                <div style="padding-top: 5%" class="col">
                  <el-row >
                    <el-button style="width: 100%" @click="organization" type="primary" round>Organization Login</el-button>
                  </el-row>
                </div>
                <div style="padding-top: 10%; padding-bottom: 5%" class="col">
                  <el-row>
                    <el-button style="width: 100%" @click="participant" type="primary" round>Participant Login</el-button>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    }
  },
  methods: {
   organization () {
     // object
     router.push({ path: '/org/login' })
   },
    participant () {
      // object
      router.push({ path: '/participant/login' })
   },
  }
}
</script>

<style>
.el-button--primary {
  --el-button-font-color: #ffffff;
  --el-button-background-color: #409eff;
  --el-button-border-color: #409eff;
  --el-button-hover-color: #66b1ff;
  --el-button-active-font-color: #e6e6e6;
  --el-button-active-background-color: #0d84ff;
  --el-button-active-border-color: #0d84ff;
}
</style>