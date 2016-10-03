<template>
  <p>
    this is edit tag {{$route.params.name}}
  </p>
</template>
<style>
</style>
<script>
  export default {
    mounted () {
      this.$http.get('http://localhost:8888/get_tags/' + this.$route.params.name)
        .then(function (ret) {
          this.tag = ret.data['tag'][0]
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
    }
  }
</script>
