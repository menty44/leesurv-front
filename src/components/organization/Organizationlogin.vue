<template>
  <div class="container">
    <div class="row">
      <div class="col border-end border-info">
        <img class="img-fluid" src="../../assets/SRVeY.png">
      </div>
      <div class="col">

        <div style="padding-left: 5%; padding-top: 30%">

          <el-row :gutter="12">
            <el-col :span="24">
              <el-card shadow="always">
                <div style="margin: 20px"></div>
                <el-form
                    :label-position="labelPosition"
                    label-width="100px"
                    :model="formLabelAlign"
                >
                  <el-form-item label="Email address">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Password">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>

                  <div style="padding-top: 2%; padding-bottom: 3%" class="col">

                    <div class="text-center">
                      <el-row >
                        <el-button style="width: 100%" @click="login" type="primary" round>Organization Login</el-button>
                      </el-row>
                    </div>
                  </div>

                </el-form>

              </el-card>
            </el-col>

          </el-row>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";

export default {

  data() {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        username: 'Enter email address',
        password: 'Enter your password'
      }
    }
  },
  methods: {
    login() {
      localStorage.setItem("menu", "open")
      router.push({ path: '/dashboard' })
    }
  }
}
</script>