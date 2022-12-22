<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="0" class="homeButton"><router-link to="/">主页</router-link></el-menu-item>
    <el-menu-item index="1"><router-link to="/">个人中心</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/">视频上传</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/Login">登录/注册</router-link></el-menu-item>
  </el-menu>
</template>
<style>
a{
  text-decoration: none;
}
.el-menu>li{
  display: block;
}
.el-menu>.homeButton{
	float: left;
}
.el-menu>li:not(.homeButton){
	float: right;
}
</style>
<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("0");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
