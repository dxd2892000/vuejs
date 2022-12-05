<template>
  <el-carousel :interval="4000" type="card" height="200px" width="200px">
    <el-carousel-item v-for="item in products" :key="item">
      <div @click="showNews(item.id)"><h3 class="medium"><img :src="item.image" style="width: 30%; height:300px; object-fit: scale-down;"></h3></div>
      
    </el-carousel-item>
  </el-carousel>
</template>
  
<script>
import newsService from '@/services/news_service';


export default {
  name: 'ListProduct',
  data() {
    return {
      products: []
    }
  },
  created() {
    newsService.getList().then((res) => {
      this.products = res
    })
  },
  methods: {
    showNews(id) {
      this.$router.push("/detailnews/" + id);
    }
  }
};
</script>

  <style>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  /* line-height: 200px; */
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}
</style>