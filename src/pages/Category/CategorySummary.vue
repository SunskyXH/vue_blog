<template>
  <div class="outer">
    <div class="article">
      <div class="article-inner">
        <header class="article-header" >
          <h1 class="thumb">
            <span class="article-title">分类</span>
          </h1>
        </header>
        <div class="article-entry">
            <section v-for="category in categorys">
            <router-link :to="{ path:'/category/'+category.href }">{{category.label}}</router-link>
            </section>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  mounted () {
    this.fetchcategory()
  },
  watch: {
    '$route': 'fetchcategory'
  },
  methods: {
    fetchcategory () {
      console.log(`fetchcategory`)
    }
  },
  data () {
    var categorys = [
          {
            label: 'Front End',
            href: 'front-end'
          },
      ]
    return {
      categorys,
    }
  }
}
</script>
