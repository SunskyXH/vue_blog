<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><router-link class="console-link" to="/console">Console</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link class="console-link" to="/console/dashboard">Dashboard</router-link></el-breadcrumb-item>
      </el-breadcrumb>
      <br />
    </el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/TheBody.jpg" class="image">
        <div style="padding: 14px;">
          <span>Articles Numbers:{{articlesNumber}}</span>
          <div class="bottom clearfix">
            <router-link to="/console/article"><el-button type="text" class="button">查看详情</el-button></router-link>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/TheMind.jpg" class="image">
        <div style="padding: 14px;">
          <span>Tags Numbers:{{tagsNumber}}</span>
          <div class="bottom clearfix">
            <router-link to="/console/tag"><el-button type="text" class="button">查看详情</el-button></router-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style>
.console a {
  color: #0e90d2;
  text-decoration: none;
  background: transparent;
}
</style>
<script>
  export default {
    mounted () {
      this.$http.get('http://localhost:8888/get_info/tags')
        .then(function (ret) {
          this.tagsNumber = ret.data.tagsNumber
          console.log(ret.data.tagsNumber)
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
      this.$http.get('http://localhost:8888/get_info/articles')
      .then(function (ret) {
        this.articlesNumber = ret.data.articlesNumber
      })
      .then(function (err) {
        if (err) {
          console.log(err)
        }
      })
    },
    data () {
      var tagsNumber = this.tagsNumber
      var articlesNumber = this.articlesNumber
      return {
        tagsNumber: tagsNumber,
        articlesNumber: articlesNumber
      }
    }
  }
</script>
