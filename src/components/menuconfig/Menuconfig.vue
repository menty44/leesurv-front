<template>
  <div class="row">
    <div class="col-md-12">
      <div style="padding-left: 1.5%;padding-right: 1.5%">
        <el-row :gutter="12" style="padding-top: 2.5%;">
          <el-col :span="12">
            <el-card shadow="always">
              <el-descriptions title="Filter Menu by Date Range">
                <div>
                  <el-descriptions-item label="From">
                    <Datepicker v-model="date"></Datepicker>
                  </el-descriptions-item>

                </div>
                <div style="padding-top: 2.5%; padding-bottom: 2.5%">
                  <el-descriptions-item label="To">
                    <Datepicker v-model="date"></Datepicker>
                  </el-descriptions-item>
                </div>

              </el-descriptions>

              <div style="padding-top: 2.5%; padding-bottom: 5%" class="col">
                <el-row>
                  <el-button style="width: 100%" @click="search" type="primary" round>SEARCH</el-button>
                </el-row>
              </div>

            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="always">
              <div style="padding-top: 2.5%; padding-bottom: 5%" class="col">
                <el-row>
                  <el-button @click="drawer = true" style="width: 100%" type="primary" round>CREATE MENU</el-button>
                </el-row>
              </div>
              <el-empty :image-size="300" v-if="menuData.length === 0"></el-empty>
              <el-skeleton :rows="5" animated v-if="isLoading === true"/>

              <!--              OPEN AND CLOSE DRAWER-->
              <el-drawer v-model="drawer" title="I am the title" :with-header="false">
                <div style="text-align: center; font-size: 20px; padding-bottom: 5%">
                  <label class="text-color">Create Menu</label>
                </div>

                <el-divider content-position="right" style="color: red!important;">please fill all the values</el-divider>

                <el-form
                    :label-position="labelPosition"
                    label-width="100px"
                    :model="formLabelAlign"
                >
                  <el-form-item label="Menu Name">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Description">
                    <el-input v-model="formLabelAlign.description"></el-input>
                  </el-form-item>

                  <div style="padding-top: 2.5%; padding-bottom: 5%" class="col">
                    <el-row>
                      <el-button style="width: 100%" @click="search" type="primary" round>SAVE</el-button>
                    </el-row>
                  </div>

                </el-form>

              </el-drawer>

            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, defineComponent } from 'vue'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
export default defineComponent({
  setup() {
    const date = ref();
    const isLoading = ref(false);
    const menuData = ref([]);
    return {
      date,
      isLoading,
      menuData,
      drawer: ref(false),
    }
  },
  components : {
    Datepicker
  },
  data() {
    return {
      range: {},
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    search() {
      // alert(this.date);
      this.isLoading = true
      this.menuData = [1,2,3]
    }
  }
})
</script>

<style>
.text-color {
  color: #0d84ff;
}
</style>
