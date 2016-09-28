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
  </el-row>

</template>
<style>
.console-link a {
  color: #0e90d2;
  text-decoration: none;
  background: transparent;
}
</style>
<script>
export default {
  mounted () {
    this.$http.get('http://localhost:8888/get_articles')
      .then(function (ret) {
        this.articles = ret.data['articles']
      })
      .then(function (err) {
        if (err) {
          console.log(err)
        }
      })
  },
  data () {
    var articles = this.articles
    return {
      articles: articles
    }
  }
}
</script>
