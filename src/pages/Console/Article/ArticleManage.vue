<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><router-link class="console-link" to="/console">Console</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link class="console-link" to="/console/article">Article Manage</router-link></el-breadcrumb-item>
      </el-breadcrumb>
      <br />
    </el-col>
    <section  v-for="article in articles">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
          <span style="line-height: 36px;">{{article.title}}</span>
        </div>
          <div class="text item">
          <i class="el-icon-date"> <time class="time"> {{ article.date }}</time></i>
          <router-link :to="{ path:'/console/article/'+article.id }"><el-button style="float: right;" type="primary" icon="edit">编辑</el-button></router-link>
          </div>
        </el-card>
        <br />
      </el-col>
    </section>
    <el-col :span="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span style="line-height: 36px;">新建文章</span>
      </div>
        <div class="text item">
          <i class="el-icon-date"> <time class="time"> </time></i>
        <router-link to="/console/add/article/"><el-button style="float: right;" type="primary" icon="edit">新建</el-button></router-link>
        </div>
      </el-card>
      <br />
    </el-col>
  </el-row>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'article-manage',
  mounted () {
    this.fetchArticles()
  },
  watch: {
    '$route': 'fetchArticles'
  },
  methods: {
    fetchArticles () {
      console.log(`fetch article`)
    }
  },
  data () {
    return {
      articles: [
        {
          title,
          date,
          id: '1'
        }
      ]
    }
  }
}
</script>
