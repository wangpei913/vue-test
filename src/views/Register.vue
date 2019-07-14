<template>
  <div class="register-view">
    <div class="register-from">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" size="mini" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-select v-model="form.type" placeholder="请选择用户类型" size="mini" style="width: 100%;">
            <el-option label="普通用户" value="0"></el-option>
            <el-option label="特殊用户" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户描述">
          <el-input type="textarea" v-model="form.desc" size="mini"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="mini">注册</el-button>
          <el-button size="mini">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { registerUser } from "@/api/index";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        type: "0",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const { name, password, type } = this.form;
      if (!name || !password || !type) {
        this.$message.error({
          showClose: true,
          message: "页面不能有空项!"
        });
        return false;
      } else {
        registerUser(this.form)
          .then(res => {
            const {
              data: { status, msg }
            } = res;
            if (status === 200) {
              this.$message({
                showClose: true,
                message: msg,
                type: "success"
              });
              this.$router.push("/login");
            } else {
              this.$message({
                showClose: true,
                message: msg,
                type: "warning"
              });
            }
          })
          .catch(err => {
            console.log(err, "err");
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.register-view {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  .register-from {
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px #ccc solid;
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
