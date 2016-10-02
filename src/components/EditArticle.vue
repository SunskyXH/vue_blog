<template>
  <el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><router-link class="console-link" to="/console">Console</router-link></el-breadcrumb-item>
          <el-breadcrumb-item><router-link class="console-link" to="/console/article">Article Manage</router-link></el-breadcrumb-item>
          <el-breadcrumb-item><router-link class="console-link" :to="{ path:'/console/article/' + article.id }">{{article.title}}</router-link></el-breadcrumb-item>
          <el-breadcrumb-item>
        </el-breadcrumb>
        <br />
      </el-col>
      <el-col :span="6">
        <el-input placeholder="标题" v-model="article.title">
          <template slot="prepend">标题</template>
        </el-input>
      </el-col>

      <el-col :span="6">
        <el-input placeholder="分类" v-model="article.cat1">
          <template slot="prepend">一级分类</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="分类" v-model="article.cat2">
          <template slot="prepend">二级分类</template>
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-input placeholder="日期" icon="date" v-model="article.date">
        </el-input>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24" >
        <label>正文:</label>
      </el-col>
      <el-col :span="18">
        <el-input type="textarea" v-model="article.content"></el-input>
      </el-col>
    </el-row>
    <br />
    <el-row :guttrt="20">
      <el-col :span="24">
        <label>标签:</label>
        <slot v-for="tag in article.tags">
          <el-tag :type="tag.color">{{tag.name}}</el-tag>
          &nbsp;
        </slot>
      </el-col>
      <el-col :span="24"><hr /></el-col>
      <el-col :span="24">
        <el-button @click.native="save" type="success">保存</el-button>
        <el-button @click.native="cancel"type="danger">取消</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>
<style>
</style>
<script>
  export default {
    mounted () {
      this.$http.get('http://localhost:8888/get_articles/' + this.$route.params.id)
        .then(function (ret) {
          this.article = ret.data['article'][0]
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
    },
    methods: {
      save () {
        this.$http.post('http://localhost:8888/update_article/' + this.$route.params.id, {
          content: this.article.content,
          title: this.article.title,
          date: this.article.date,
          cat1: this.article.cat1,
          cat2: this.article.cat2,
          tags: this.article.tags
        })
        this.$notify({
          title: '编辑成功',
          message: '已保存编辑结果',
          type: 'success'
        })
      },
      cancel () {
        this.$notify({
          title: '取消编辑',
          message: '更改内容未保存',
          type: 'warning'
        })
      }
    },
    data () {
      var article = this.article
      return {
        article: article
      }
    }
  }
</script>
