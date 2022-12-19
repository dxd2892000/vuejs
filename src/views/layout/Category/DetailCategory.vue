<template>
  <div>
    <Header></Header>
    <el-cotainer v-loading="loading">
    <el-row :gutter="12">
      <el-col :span="18">
        <el-card v-for="item in detail_category" :key="item.id">
          <div>
            <el-row :gutter="12">
              <el-col :span="6">
                <img
                  :src="item.image"
                  style="width: 30%; height: 100px; object-fit: scale-down"
                />
              </el-col>
              <el-col :span="18">
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"><el-empty :image-size="200"></el-empty></el-col>
    </el-row>
    <label style="display: none" for>{{ setIdNews }}</label>
  </el-cotainer>
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";
import categoryService from "@/services/categories_service";

export default {
  data() {
    return {
      id: {
        category_id: this.$route.params.id,
      },
      detail_category: [],
      loading: true
    };
  },
  created() {
    categoryService.getListNewsCategory(this.id).then((res) => {
      (this.detail_category = res), console.log("ress:", res);
      this.loading = false
    });
  },
  components: {Header},
  computed: {
    setIdNews() {
      this.id.category_id = this.$route.params.id;
      return categoryService.getListNewsCategory(this.id).then((res) => {
        this.detail_category = res;
      });
    },
  },
};
</script>
  
  <style>
@import "@/styles/container.css";
</style>