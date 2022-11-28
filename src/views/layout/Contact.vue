<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true"
      ><i class="el-icon-circle-plus"></i>Thêm mới</el-button
    >
    <el-dialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="phone" label="Phone" width="180">
      </el-table-column>
      <el-table-column prop="email" label="Email" width="180">
      </el-table-column>
      <el-table-column prop="subject" label="Subject" width="180">
      </el-table-column>
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
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import contactService from "@/services/contact_service";

export default {
  name: "Contact",
  data() {
    return {
      tableData: [],
      dialogVisible: false
    };
  },
  created() {
    contactService.getList().then((res) => {
      console.log("contact", res);
      this.tableData = res;
    });
  },
  methods: {
    handleDelete(id) {
      console.log("id:", id);
      contactService.delete(id).then((res) => {
        this.$message(res);
        this.$router.push("/contact");
      });
    },
    handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>

<style>
</style>