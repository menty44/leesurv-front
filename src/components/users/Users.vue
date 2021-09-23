<template>
  <div class="row">
    <div class="col-md-12">

      <div >

        <label>Users</label>
        <ag-grid-vue style="width: 500px; height: 500px;"
                     class="ag-theme-alpine"
                     :columnDefs="columnDefs"
                     :rowData="rowData">
        </ag-grid-vue>
      </div>
    </div>
  </div>



</template>

<script>
import { defineComponent } from 'vue'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from 'ag-grid-vue3';

export default defineComponent({
  setup() {
  },
  data() {
    return {
      columnDefs: null,
      rowData: null
    }
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' }
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
