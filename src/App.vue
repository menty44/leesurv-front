<template>
  <Menu v-if="status"></Menu>
  <router-view></router-view>
</template>

<script>
import Menu from "./components/menu/Menu";

export default {
  setup() {
    let status = localStorage.getItem("menu")
    if (status) {
      status = true;
    }else {
      status = false
    }
    return {
      status
    }
  },
  name: 'App',
  components: {
    Menu
  }
}
</script>
<!--<style lang="scss">-->
<!--@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";-->
<!--@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";-->
<!--</style>-->
<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->
<!--</style>-->
