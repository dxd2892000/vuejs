<template>
  <div class="fixed">
    <el-row class="header">
      <el-col span="6" style="padding-left: 100px">
        <Logo></Logo>
      </el-col>
      <el-col span="16">
        <NavMenu></NavMenu>
      </el-col>
      <el-col span="2" style="margin-top: 20px; text-align: center">
        <UserMenu></UserMenu>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
import Logo from "@/components/objectHeader/Logo.vue";
import NavMenu from "@/components/objectHeader/NavMenu.vue";
import UserMenu from "@/components/objectHeader/UserMenu.vue";

export default {
  name: "Header",
  components: { Logo, NavMenu, UserMenu },
};
</script>
  
  <style>
@import "@/styles/header.css";
</style>