<template>
  <div>
    <Header></Header>
    <DialogAddContactVue></DialogAddContactVue>
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
          <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <DialogUpdateContactVue
      :dialogVisible="dialogVisible"
      :updateContactForm="contactData"
    ></DialogUpdateContactVue>
  </div>
</template>

<script>
import contactService from "@/services/contact_service";
import Header from "@/components/Header.vue";
import DialogAddContactVue from "./DialogAddContact.vue";
import DialogUpdateContactVue from "./DialogUpdateContact.vue";

export default {
  name: "Contact",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      contactData: {
        id: "",
        name: "",
        email: "",
        phone: "",
        subject: "",
      },
      search: ''
    };
  },
  created() {
    contactService.getList().then((res) => {
      console.log("contact", res);
      this.tableData = res;
    });
  },
  components: { DialogAddContactVue, DialogUpdateContactVue, Header },
  methods: {
    handleDelete(id) {
      console.log("id:", id);
      contactService.delete(id).then((res) => {
        this.$message(res);
        contactService.getList().then((list) => {
          this.tableData = list;
        });
      });
    },
    handleEdit(row) {
      (this.dialogVisible = true),
        (this.contactData.id = row.id),
        (this.contactData.name = row.name),
        (this.contactData.email = row.email),
        (this.contactData.phone = row.phone),
        (this.contactData.subject = row.subject);
    },
  },
};
</script>

<style>
</style>