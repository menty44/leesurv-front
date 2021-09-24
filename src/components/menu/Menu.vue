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
    <el-menu-item index="9" @click="dashboard">
      <i class="el-icon-house"></i>
      Dashboard</el-menu-item>

    <el-menu-item index="2" @click="analytics">
      <i class="el-icon-menu"></i>
      Analytics</el-menu-item>

    <el-menu-item index="3" @click="awards">
      <i class="el-icon-wallet"></i>
      My Awards</el-menu-item>

    <el-menu-item index="4" @click="surveys">
      <i class="el-icon-pie-chart"></i>
      Surveys</el-menu-item>

    <el-menu-item index="5" @click="users">
      <i class="el-icon-grape"></i>
      Users</el-menu-item>

    <el-menu-item index="6" @click="profile">
      <i class="el-icon-user"></i>
      Profile</el-menu-item>

    <el-sub-menu index="7">
      <template #title>
        <i class="el-icon-setting"></i>
        Communications</template>
      <el-menu-item index="7-1" @click="email">Send Email</el-menu-item>

      <el-menu-item index="7-2" @click="sms">Send SMS</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="8">

      <template #title><i class="el-icon-setting"></i>
        Settings</template>
      <el-menu-item index="8-1" @click="roles">Roles</el-menu-item>
      <el-menu-item index="8-2" @click="permissions">Permissions</el-menu-item>
      <el-menu-item index="8-3" @click="menus">Menus</el-menu-item>
      <el-menu-item index="8-4" @click="countries">Countries</el-menu-item>
      <el-menu-item index="8-5" @click="channels">Channels</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="9" @click="drawer = true">
      <i class="el-icon-message"></i>
      Notifications
      <el-badge :value="3" class="item"></el-badge></el-menu-item>

    <el-divider direction="vertical"></el-divider>

    <el-menu-item style="background:red!important; float:right!important; color: white!important;" index="10" @click="logout">
      <i class="el-icon-remove-outline"></i>
      Logout</el-menu-item>

  </el-menu>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script >
import { defineComponent, ref } from 'vue'
import router from '../../router'

export default defineComponent({
  setup() {
    const activeIndex2 = ref('9')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      drawer: ref(false),
      activeIndex2,
      handleSelect,
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      router.push({ path: '/' })
    },
    roles () {
      // object
      router.push({ path: '/roles' })
    },
    countries () {
      // object
      router.push({ path: '/country' })
    },
    awards () {
      // object
      router.push({ path: '/awards' })
    },
    analytics () {
      // object
      router.push({ path: '/analytics' })
    },
    users () {
      // object
      router.push({ path: '/users' })
    },
    sms () {
      // object
      router.push({ path: '/sms' })
    },
    email () {
      // object
      router.push({ path: '/email' })
    },
    dashboard () {
      // object
      router.push({ path: '/dashboard' })
    },
    menus () {
      // object
      router.push({ path: '/menus' })
    },
    channels () {
      // object
      router.push({ path: '/channels' })
    },
    settings () {
      // object
      router.push({ path: '/roles' })
    },
    permissions () {
      // object
      router.push({ path: '/permissions' })
    },
    profile () {
      // object
      router.push({ path: '/profile' })
    },
    surveys () {
      // object
      router.push({ path: '/survey' })
    },
  }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
