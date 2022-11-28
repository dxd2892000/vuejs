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
    </el-form>
  </div>
</template>
  
<script>
import { REGISTER } from "@/constans/index.js";
import {validateEmail,validatePass,validatePassConfirm} from '@/utils/validate'

export default {
  data() {
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
          console.log("logupFrom",this.logupForm);
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