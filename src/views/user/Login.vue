<template>
  <div>
    <el-form
      :model="loginForm"
      status-icon
      :rules="rule"
      ref="loginForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item><span class="title_css">SIGN IN</span></el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input
          type="text"
          v-model="loginForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="registerForm"
          style="background-color: green; color: white"
          >Register</el-button
        >
        <el-button type="primary" @click="submitForm('loginForm')"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { AUTH } from "@/constans/index.js";
import { validateEmail, validatePass } from "@/utils/validate";

export default {
  data() {
    return {
      loginForm: {
        email: "duc@gmail.com",
        password: "Xduc@gmail.com123",
      },
      rule: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log('Form: ',this.loginForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch(`auth/${AUTH}`, this.loginForm)
            .then(() => {
              this.$notify({
                type: "success",
                message: "Login Success",
                duration: 3000
              });
              this.$router.push("/");
            })
            .catch((err) => {
              this.$notify({
                type: "error",
                message: "Nguoi dung khong ton tai",
                duration: 3000
              });
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