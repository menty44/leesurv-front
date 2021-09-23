<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >

    <el-menu-item index="1"><img height="30px" src="../../assets/SRVeY.png"></el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      Analytics</el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-wallet"></i>
      My Awards</el-menu-item>

    <el-menu-item index="4" >
      <i class="el-icon-pie-chart"></i>
      Surveys</el-menu-item>

    <el-menu-item index="5" >
      <i class="el-icon-grape"></i>
      Users</el-menu-item>

    <el-menu-item index="6" >
      <i class="el-icon-user"></i>
      Profile</el-menu-item>

    <el-sub-menu index="7">
      <template #title>
        <i class="el-icon-setting"></i>
        Communications</template>
      <el-menu-item index="7-1">Send Email</el-menu-item>

      <el-menu-item index="7-2">Send SMS</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="8">

      <template #title><i class="el-icon-setting"></i>
        Settings</template>
      <el-menu-item index="8-1">Roles</el-menu-item>
      <el-menu-item index="8-2">Permissions</el-menu-item>
      <el-menu-item index="8-3">Menus</el-menu-item>
      <el-menu-item index="8-3">Channels</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="9" @click="drawer = true">
      <i class="el-icon-message"></i>
      Notifications
      <el-badge :value="3" class="item"></el-badge></el-menu-item>

  </el-menu>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script >
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // const activeIndex = ref('1')
    const activeIndex2 = ref('2')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      drawer: ref(false),
      activeIndex2,
      handleSelect,
    }
  },
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
