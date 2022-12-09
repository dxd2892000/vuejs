<template>
  <div>
    <Header></Header>
    <el-form
    :model="updateForm"
    status-icon
    :rules="rules"
    ref="updateForm"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item><span class="title_css">PROFILE</span></el-form-item>
    <el-form-item label="ID">
      <el-input
        type="text"
        v-model="updateForm.id"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input
        type="text"
        v-model="updateForm.email"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="Name">
      <el-input
        type="text"
        v-model="updateForm.name"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="registerForm"
        style="background-color: green; color: white"
        >Register</el-button
      >
      <el-button type="primary" @click="submitForm('updateForm')"
        >UPDATE</el-button
      >
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import Header  from '@/components/Header.vue';
import userService from "@/services/user_service";

export default {
  data() {
    return {
      updateForm: {
        id: "",
        name: "",
        email: ""
      },
    };
  },
  components: {Header},
  created() {
    this.updateForm.id = this.$store.state.auth.auth.user.id;
    this.updateForm.email = this.$store.state.auth.auth.user.email;
    this.updateForm.name = this.$store.state.auth.auth.user.name;
  },
  methods: {
    submitForm(formName) {
      console.log(this.updateForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userService.update(this.updateForm).then((res) => {
            this.$message({
              message: res.message,
              showClose: true,
              duration: 1000,
            });
            console.log("UPDATE_SUCCESS: ",res.data);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerForm() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
.demo-ruleForm {
  text-align: center;
  margin: 25%;
}
.title_css {
  font-size: 25px;
  font-weight: bold;
}
</style>