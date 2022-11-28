<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="category_id" label="Category_id" width="180"></el-table-column>
    <el-table-column prop="title" label="Title" width="180"></el-table-column>
    <el-table-column prop="image" label="Image" width="180">
      <template #default="scope">
        <img style="width: 100%" :src="scope.row.image" />
      </template>
    </el-table-column>
    <el-table-column prop="content" label="content" width="180"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"
        ></el-input>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
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
};
</script>

<style>
</style>