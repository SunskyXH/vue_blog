<template>
  <div class="outer">
    <div class="article">
      <div class="article-inner">
        <header class="article-header" >
          <h1 class="thumb">
            <span class="article-title">标签</span>
          </h1>
        </header>
        <div class="article-entry">
            <section v-for="tag in tags">
            <router-link :to="{ path:'/tag/'+tag.href }">{{tag.label}}</router-link>
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
    this.fetchTags()
  },
  watch: {
    '$route': 'fetchTags'
  },
  methods: {
    fetchTags () {
      console.log(`fetchTags`)
      var tags = [
          {
            label: 'Front End',
            href: 'front-end'
          },
          {
            label: 'Back End',
            href: 'back-end'
          },
      ]
    }
  },
  data () {
    var tags = [
          {
            label: 'Front End',
            href: 'front-end'
          },
          {
            label: 'React',
            href: 'react'
          },
          {
            label: 'React Native',
            href: 'react-native'
          },
          {
            label: 'Vue',
            href: 'vue'
          },
      ]
    console.log(tags)
    return {
      tags,
    }
  }
}
</script>
