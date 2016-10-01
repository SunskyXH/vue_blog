<template>
  <p>
    this is EditArticle {{$route.params.id}}
  </p>
</template>
<style>
</style>
<script>
export default {
  mounted () {
    this.$http.get('http://localhost:8888/get_articles/' + this.$route.params.id)
      .then(function (ret) {
        this.articles = ret.data['article'][0]
      })
      .then(function (err) {
        if (err) {
          console.log(err)
        }
      })
  }
}
</script>
