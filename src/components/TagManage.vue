<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><router-link class="console-link" to="/console">Console</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link class="console-link" to="/console/tag">Tags Manage</router-link></el-breadcrumb-item>
      </el-breadcrumb>
      <br />
    </el-col>
    <section  v-for="tag in tags">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">{{tag.name}}</span>
          </div>
          <div class="text item">
          <el-tag :type="tag.color">{{tag.color}}</el-tag>
          <router-link :to="{ path:'/console/tag/'+tag.name }"><el-button style="float: right;" type="primary" icon="edit">编辑</el-button></router-link>
          </div>
        </el-card>
        <br />
      </el-col>
    </section>
    <el-col :span="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">新建标签</span>
        </div>
        <div class="text item">
        <el-tag type="primary">NewTag</el-tag>
        <router-link to="/console/add/tag/"><el-button style="float: right;" type="primary" icon="edit">新建</el-button></router-link>
        </div>
      </el-card>
  </el-row>

</template>
<style></style>
<script>
  export default {
    mounted () {
      this.$http.get('http://localhost:8888/get_tags')
        .then(function (ret) {
          this.tags = ret.data['tags']
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
    },
    data () {
      var tags = this.tags
      return {
        tags: tags
      }
    }
  }

</script>
