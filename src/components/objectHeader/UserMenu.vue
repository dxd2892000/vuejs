<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <i class="el-icon-user-solid"></i>USER
    </span>
    <el-dropdown-menu>
      <el-dropdown-item @click="handleProfile">Profile</el-dropdown-item>
      <el-dropdown-item>
        <span @click="handleLogout"> Logout </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import {LOGOUT} from '@/constans/'

export default {
    name: 'UserMenu',
    data() {},
    methods: {
        handleProfile() {
      this.$router.push("/profile");
    },
    handleLogout() {
      this.$store
        .dispatch(`auth/${LOGOUT}`)
        .then((res) => {
          setTimeout(() => {
            this.$router.push("/login"); // redirect
          });
          this.$notify({
            type: 'success',
            message: "Logout "+res.message
          });
        })
        .catch((error) => {
          this.$message({
            message: "error",
            type: "error",
            showClose: true,
            duration: 1000,
          });
        });
    },
    }
};
</script>

<style>
@import '@/styles/header.css';
</style>