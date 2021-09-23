<template>
  <div class="row">
    <div class="col-md-12">

      <div >

        <label>testing fred fred fred</label>
        <span>Our grid supports six responsive breakpoints. Breakpoints are based on min-width media queries, meaning they affect that breakpoint and all those above it (e.g., .col-sm-4 applies to sm, md, lg, xl, and xxl). This means you can control container and column sizing and behavior by each breakpoint.
          mixins power the grid. If you don’t want to use the predefined grid classes in Bootstrap, you can use our grid’s source Sass to create your own with more semantic markup. We also include some CSS custom properties to consume these Sass variables for even greater flexibility for you.</span>
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
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
