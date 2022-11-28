<template>
  <div class="grid-content bg-purple">
    <el-menu
      :default-active="1"
      class="el-menu-demo header"
      mode="horizontal"
      text-color="black"
      v-show="isShow"
    >
      <el-menu-item v-for="item in topHeader" :key="item.id" :index="item.id" @click="handleClick(item.path)">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{item.name}}
          </span>
          <el-dropdown-menu slot="dropdown" v-if="item.id === 2">
            <el-dropdown-item v-for="cate in categories" :key="cate.id">{{cate.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import categoryService from "@/services/categories_service";

export default {
  name: "NavMenu",
  data() {
    return {
      categories: [],
      topHeader: [
        {
          id: 1,
          name: "Home",
          path: "/home",
        },
        {
          id: 2,
          name: "Category",
          path: "/home",
        },
        {
          id: 3,
          name: "News",
          path: "/news",
        },
        {
          id: 4,
          name: "Contact",
          path: "/contact",
        },
      ],
      isShow: false
    };
  },
  created() {
    categoryService.getList().then((res) => {
      console.log("category ", res);
      this.categories = res;
    });

    this.isShow = !!localStorage.getItem('token')
  },
  methods: {
    handleClick(path) {
      console.log('Path: ',path)
      this.$router.push(path)
    }
  },
};
</script>

<style>
@import "@/styles/header.css";
</style>