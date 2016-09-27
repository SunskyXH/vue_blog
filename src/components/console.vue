<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
          <el-menu-item index="1">Blog console</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row type="flex" class="tac" :gutter="20">
      <el-col :span="4">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark" router="true">
          <el-menu-item index="/console/article">Articles Manage</el-menu-item>
          <el-menu-item index="/console/tag">Tags Manage</el-menu-item>
          <el-menu-item index="3"></el-menu-item>
        </el-menu>
      </el-col>
      <router-view></router-view>
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
