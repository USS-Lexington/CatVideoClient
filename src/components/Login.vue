<script setup>
import { isNull } from "lodash";
import { onMounted } from "vue";
import { inject } from "vue";
const axios = inject("axios");
</script>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" },
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" },
        ],
      },
    };
  },
  methods: {
    handleLogin: function () {
      if (isNull(this.loginForm.username)) {
        //没输入账号
        document.getElementById("username").focus();
        ElMessage({
          showClose: true,
          message: "请输入账号",
          type: "warning",
        });
        return 0;
      }
      if (isNull(this.loginForm.password)) {
        //没输入密码
        document.getElementById("password").focus();
        ElMessage({
          showClose: true,
          message: "请输入密码",
          type: "warning",
        });
        return 0;
      }
      this.sendRequest(this.loginForm);
    },
    sendRequest: function (form) {
      // console.log(JSON.stringify(form));
      this.axios
        .post("api/UserAddServlet", JSON.stringify(form))
        .then((response) => {
          console.log(response.data);
          let code = response.data;
          if (code === "success") {
            ElMessage({
              showClose: true,
              message: "欢迎您," + this.loginForm.username,
              type: "success",
            });
          }
          if (code === "failure:repeat") {
            ElMessage({
              showClose: true,
              message: "注册失败：用户名已存在",
              type: "error",
            });
          }
          if (code === "failure:password") {
            ElMessage({
              showClose: true,
              message: "登陆失败：密码不正确",
              type: "error",
            });
          }
        });
    },
  },
};
</script>

<template>
  <!-- <button-template></button-template> -->
  <div slot="title" class="login">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <h3 class="title">登录/注册</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
          id="username"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          id="password"
          @keyup.enter.native="handleLogin"
        >
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          size="default"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          <span>登录/注册</span>
        </el-button>
      </el-form-item>
      <span>未注册的用户会自动注册</span>
    </el-form>
  </div>
</template>
<style>
.login {
  margin: 0 auto;
  max-width: 80vw;
}
</style>
