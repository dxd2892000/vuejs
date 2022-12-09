<template>
  <div>
    <Header></Header>
    <el-main>
      <el-container>
        <el-header style="text-align: left;"><span style="font-size: 25px; ">{{title[0]}}</span></el-header>
        <el-main>
          <img src="@/./assets/anh_5.png" alt="" style="margin-left: 25%;">
          <p>&ndash;Mất nhiều thời gian để tạo tài liệu so sánh đơn giá xây dựng trung tâm thương mại và lưu trữ dữ liệu sang excel trong môi trường cục bộ.</p>
          <p>&ndash;Tất cả dữ liệu báo giá đều được phân phối và quản lý trên server dưới dạng file excel nên rất khó để trích xuất dữ liệu. </p>
          <p>&ndash;Khách hàng muốn hệ thống hóa toàn bộ số liệu báo giá và đánh giá các báo giá này từ nhà cung cấp xây dựng qua 1 hệ thống. </p>
          <p> 1. Tạo ra một môi trường làm việc chuyên nghiệp, năng động. Con người là trung tâm trong chính sách phát triển của CodLUCK. Chúng tôi hướng đến việc xây dựng một môi trường trẻ trung, cởi mở  nơi mà  mọi thành viên đều có thể phát huy hết khả năng của mình, tô điểm cho công ty trở nên đa màu sắc nhưng vẫn giữ được tinh thần đoàn kết.</p>
          <p>2. Mang lại sự hài lòng tuyệt đối cho Khách Hàng 
            Khách hàng của CodLUCK sẽ được cung cấp những dịch vụ tốt nhất và sự tư vấn nhiệt tình, phù hợp nhất. Chúng tôi sẽ biến lựa chọn của Khách  hàng thành lựa chọn đúng đắn hơn bao giờ hết.</p>
          <p>3. Đóng góp cho xã hội 
          Thế giới đang chuyển mình trong cuộc cách mạng công nghiệp 4.0. Chuyển đổi kĩ thuật số (DX) đang diễn ra nhanh chóng mặt trên nhiều lĩnh  vực. Sứ mệnh của chúng tôi là đóng góp vào quá trình chuyển đổi kỹ thuật số của Việt Nam và của thế giới, bằng cách cung cấp các giải pháp DX  phù hợp cho doanh nghiệp, cho chính phủ và xã hội.</p>
        </el-main>
      </el-container>
      <el-container>
          <el-header><p class="title_css">{{title[1].toUpperCase()}}</p></el-header>
          <el-main>
            <ListProductVue></ListProductVue>
          </el-main>
        </el-container>
    </el-main>
  </div>
    
  </template>
  
  <script>
import Header  from '@/components/Header.vue';
import ListProductVue from "./News/ListProduct.vue";

  export default {
    data(){
      return{
        category_name:"Phát triển hệ thống booking",
        title:["Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại","Danh sách liên quan"],
      }
    },
    components: {ListProductVue, Header},
  }
  </script>
  
  <style>
    .el-col-6 {
      text-align: center;
      font-weight: bold;
    }
    .title_css {
      font-size: 25px;
      font-weight: bold;
    }
  </style>