<template>
  <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose"
  >
    <el-form
      :model="updateContactForm"
      status-icon
      ref="updateContactForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item><span>UPDATE</span></el-form-item>
      <el-form-item label="Name" prop="name">
        <el-input
          type="text"
          v-model="updateContactForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input
          type="text"
          v-model="updateContactForm.phone"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input
          type="text"
          v-model="updateContactForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Subject" prop="subject">
        <el-input
          type="text"
          v-model="updateContactForm.subject"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="submitForm('updateContactForm')"
        >Confirm</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import contactService from "@/services/contact_service";
export default {
  props: ['updateContactForm','dialogVisible'],
  data() {
    return {
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            console.log(this.updateContactForm)
          contactService.update(this.updateContactForm).then((res) => {
            console.log("addContact2:", res);
            this.$notify({
              type: "success",
              message: res,
            });
            this.dialogVisible = false;
          });
        }
      });
    },
  },
};
</script>

<style>
</style>