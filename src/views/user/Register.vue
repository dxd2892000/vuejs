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
      <el-form-item label="Confirm" prop="confirm">
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
import { REGISTER } from "@/constans/index.js";

export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value == "") {
        return callback(new Error("Please input the username"));
      } else {
        var filter =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(value)) {
          return callback(new Error("No valid!"));
        } else {
          callback();
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value == "") {
        return callback(new Error("Please input the pass"));
      } else {
        callback();
      }
    };
    var validatePassConfirm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
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
        confirm: [{ validator: validatePassConfirm, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
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