<template>
  <div>
    <el-form
      :model="logupForm"
      status-icon
      :rules="rule"
      ref="logupForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item><span class="title_css"> SIGN UP</span></el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input
          type="text"
          v-model="logupForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Name">
        <el-input
          type="text"
          v-model="logupForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="password"
          v-model="logupForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="c_password">
        <el-input
          type="password"
          v-model="logupForm.c_password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('logupForm')"
          >Register</el-button
        >
        <el-button @click="resetForm('logupForm')">Reset</el-button>
      </el-form-item>
      <span
        >Have a account?<el-button type="text" @click="handleRouter('/login')"
          >Sign In</el-button
        ></span
      >
    </el-form>
  </div>
</template>
  
<script>
import Header from "@/components/Header.vue";
import { REGISTER } from "@/constans/index.js";
import { validateEmail, validatePass } from "@/utils/validate";

export default {
  data() {
    var validateConfirm = (rule, value, callback) => {
      if (value == "") {
        return callback(new Error("Please input the pass"));
      } else if (value !== this.logupForm.password) {
        return callback(new Error("Don't match"));
      } else {
        return callback();
      }
    };
    return {
      logupForm: {
        email: "",
        password: "",
        name: "",
        c_password: "",
      },
      rule: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        c_password: [{ validator: validateConfirm, trigger: "blur" }],
      },
    };
  },
  components: { Header },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("logupFrom", this.logupForm);
          this.$store.dispatch(`auth/${REGISTER}`, this.logupForm);
          alert("register success!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRouter(path) {
      this.$router.push(path);
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