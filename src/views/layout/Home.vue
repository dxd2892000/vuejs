<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <el-container>
          <el-header
            ><p class="title_css">{{ title[0].toUpperCase() }}</p></el-header
          >
          <el-container>
            <el-aside width="600px"
              ><img src="@/./assets/anh_5.png"
            /></el-aside>
            <el-main>
              <p class="title_css">
                Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại
              </p>
              <p>
                &ndash;Mất nhiều thời gian để tạo tài liệu so sánh đơn giá xây
                dựng trung tâm thương mại và lưu trữ dữ liệu sang excel trong
                môi trường cục bộ.
              </p>
              <p>
                &ndash;Tất cả dữ liệu báo giá đều được phân phối và quản lý trên
                server dưới dạng file excel nên rất khó để trích xuất dữ liệu.
              </p>
              <p>
                &ndash;Khách hàng muốn hệ thống hóa toàn bộ số liệu báo giá và
                đánh giá các báo giá này từ nhà cung cấp xây dựng qua 1 hệ
                thống.
              </p>
              <el-button @click="handleLearnMore">Đọc tiếp</el-button>
            </el-main>
          </el-container>
        </el-container>
        <el-container>
          <el-header
            ><p class="title_css">{{ title[1].toUpperCase() }}</p></el-header
          >
          <el-main>
            <ListProductVue></ListProductVue>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
    
<script>
import Header from "@/components/Header.vue";
import ListProductVue from "./News/ListProduct.vue";

export default {
  data() {
    return {
      category_name: "Phát triển hệ thống booking",
      title: ["Tin tức mới nhất", "Danh sách tin tức"],
      // Items: {
      //   id: 1,
      //   name: "Detail",
      //   path: "/detail",
      // },
    };
  },
  components: { ListProductVue, Header },
  methods: {
    handleLearnMore() {
      this.$router.push("/detail");
    },
  },
};
</script>
    
    <style>
.row-bg {
  padding: 10px 0;
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 300px;
}
.title_css {
  font-size: 25px;
  font-weight: bold;
}
.footer_text {
  font-weight: bold;
}
.el-col-6 {
  text-align: center;
  font-weight: bold;
}
</style>