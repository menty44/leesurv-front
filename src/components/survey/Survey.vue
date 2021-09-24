<template>
  <div class="row">
    <div class="col-md-12">

      <div class="col-md-12">
        <div style="padding-left: 1.5%;padding-right: 1.5%">
          <el-row :gutter="12" style="padding-top: 2.5%;">
            <el-col :span="12">
              <el-card shadow="always"> Always </el-card>
            </el-col>
            <el-col :span="12">
              <el-card shadow="always"> Hover </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
