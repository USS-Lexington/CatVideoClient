<script setup>
import { onMounted } from "vue";
import { inject } from "vue";
const axios = inject("axios");
</script>

<script>
export default {
  data() {
    return {
      videoList: [
        {
          vid: 1,
          title: "2222",
          artist: "0000",
        },
        {
          vid: 2,
          title: "1111",
          artist: "0000",
        },
        {
          vid: 3,
          title: "0000",
          artist: "0000",
        },
      ],
    };
  },
  mounted() {
    this.axios
      .get("api/VideoGetAllServlet")
      .then((response) => {
        this.videoList = response.data;
        // console.log(this.tableData);
      })
      .catch(function (error) {
        // 请求失败处理
        // console.log(error);
      });
  },
};
</script>

<template>
  <el-container>
    <el-aside>
      <el-header>
        <span>今日热映</span>
      </el-header>
      <el-table :data="videoList">
        <el-table-column prop="title" label="片名" width="100px">
        </el-table-column>
        <el-table-column prop="artist" label="导演"> </el-table-column>
      </el-table>
    </el-aside>
    <el-main>
      <el-header>
        <span> 所有影片 </span>
      </el-header>
      <el-row :gutter="10">
        <el-col :span="6" v-for="(o, index) in videoList" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <img v-bind:src="o.image" class="image" />
            <div style="padding: 14px">
              <span>{{ o.title }}</span>
              <div class="bottom clearfix">
                <span class="time">{{ o.description }}</span>
                <el-button type="primary" class="button" @click="playVideo(o)"
                  >观看</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style>
.el-header {
	padding: 0;
	color: #333;
	text-align: center;
	line-height: 60px;
}
.el-card{
  max-width: 200px;
}
.el-card>div{
	line-height: normal;
}
.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
  min-height: 300px;
}


.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}
.el-main>.el-header{
	color:#409EFF;
	text-align: right;
	font-size: 1.2em;
}
.el-aside {
	width: 20% !important;
	color: #333;
	text-align: center;
	line-height: 200px;
	padding: 0 20px 0 20px;
}
.el-aside>.el-header{
	text-align: left;
	color: #F56C6C;
	font-size: 1.2em;
}
.el-aside>.el-table{
	width: 100%;
}
.el-menu>.homeButton{
	float: left;
}
.el-menu>li:not(.homeButton){
	float: right;
}
</style>