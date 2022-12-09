<template>
  <div>
    <Header></Header>
    <el-row :gutter="12">
    <el-col :span="18">
      <el-card v-for="item in tableData" :key="item.id">
        <div @click="handleNewDetail(item.id)">
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
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import newsService from "@/services/news_service";

export default {
  name: "News",
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    newsService.getList().then((res) => {
      this.tableData = res;
    });
  },
  components: {Header},
  methods: {
    handleNewDetail(id) {
      this.$router.push("/detailnews/" + id);
    },
  },
};
</script>

<style>
@import "@/styles/container.css";
</style>