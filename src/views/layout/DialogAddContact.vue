<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">THEM MOI</el-button>

    <el-dialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        :model="addContactForm"
        status-icon
        ref="addContactForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item><span>TAO MOI</span></el-form-item>
        <el-form-item label="Name" prop="name">
          <el-input
            type="text"
            v-model="addContactForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input
            type="text"
            v-model="addContactForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input
            type="text"
            v-model="addContactForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Subject" prop="subject">
          <el-input
            type="text"
            v-model="addContactForm.subject"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitForm('addContactForm')"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import contactService from "@/services/contact_service";
export default {
  data() {
    return {
      dialogVisible: false,
      addContactForm: {
        name: "",
        email: "",
        phone: "",
        subject: "",
      },
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
    console.log("addContact1:", this.addContactForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("addContact1:", this.addContactForm);
          contactService.create(this.addContactForm).then((res) => {
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