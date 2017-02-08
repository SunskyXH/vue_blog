<template>
  <div class="container-fluid">
    <el-row class="tac" :gutter="20">
      <el-col :span="5" class="side-nav">
        <el-menu default-active="1" class="el-menu-vertical-demo"  theme="dark" :router="true">
          <el-menu-item index="/console/dashboard">Dashboard</el-menu-item>
          <el-menu-item index="/console/article">Articles Manage</el-menu-item>
          <el-menu-item index="/console/tag">Tags Manage</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19">
        <br />
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'console',
  methods: {
    open () {
      this.$notify({
        title: '登陆成功',
        message: '你已经成功登陆',
        type: 'success'
      })
    }
  }
}
</script>
<style>
   .console-link a {
    color: #0e90d2;
    text-decoration: none;
    background: transparent;
  }
  .container-fluid {
    height: inherit;
  }
  .tac {
    height: inherit;
  }
  .side-nav {
    height: inherit;
  }
  .el-menu-vertical-demo{
    display: block;
    height: inherit;
  }
</style>
