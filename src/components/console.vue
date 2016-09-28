<template>
  <div>
    <el-row class="tac" :gutter="20">
      <el-col :span="24">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item index="/console">Blog Console</el-menu-item>
          <el-menu-item index="/">Back to Index</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-menu default-active="1" class="el-menu-vertical-demo"  theme="dark" :router="true">
          <el-menu-item index="/console/dashboard">Dashboard</el-menu-item>
          <el-menu-item index="/console/article">Articles Manage</el-menu-item>
          <el-menu-item index="/console/tag">Tags Manage</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
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
.console a {
  color: #0e90d2;
  text-decoration: none;
  background: transparent;
}
</style>
