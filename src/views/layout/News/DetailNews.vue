<template>
  <div>
    <Header></Header>
    <el-main>
    <el-container>
      <el-header style="text-align: left"
        ><span style="font-size: 25px">{{
          detail_product.title
        }}</span></el-header
      >
      <el-main>
        <img :src="detail_product.image" alt="" style="margin-left: 25%" />
        <p style="text-align: center">{{ detail_product.content }}</p>
      </el-main>
    </el-container>
    <el-container>
      <el-header
        ><p class="title_css">{{ title[1].toUpperCase() }}</p></el-header
      >
      <el-main>
        <ListProductVue></ListProductVue>
      </el-main>
    </el-container>
    <label style="display: none" for>{{ setIdNews }}</label>
  </el-main>
  </div>
  
</template>
  <script>
import Header from "@/components/Header.vue";
import newsService from "@/services/news_service";

import ListProductVue from "./ListProduct.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      title: [
        "Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại",
        "Danh sách liên quan",
      ],
      detail_product: {},
    };
  },
  components: { ListProductVue, Header },
  created() {
    newsService.detail(this.id).then((res) => {
      this.detail_product = res;
    });
  },
  computed: {
    setIdNews() {
      this.id = this.$route.params.id;
      return newsService.detail(this.id).then((res) => {
        this.detail_product = res;
      });
    },
  },
};
</script>
  
  <style>
@import "@/styles/container.css";
.el-col-6 {
  text-align: center;
  font-weight: bold;
}
.title_css {
  font-size: 25px;
  font-weight: bold;
}
</style>