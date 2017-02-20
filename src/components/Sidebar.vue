<template>
  <aside class="blog-sidebar">
    <br>
    <div class="sidebar-module sidebar-module-inset" v-for="side in sides">
      <h4>{{side.title}}</h4>
      <slot v-for="module in side.modules">
        <ol class="list-unstyled">
          <li><a :href="module.herf">{{module.title}}</a></li>
        </ol>
      </slot>
    </div>
    <div class="sidebar-module sidebar-module-inset">
      <h4>链接</h4>
      <ol class="list-unstyled">
        <li><a href="http://miria.moe">ChionLab</a></li>
      </ol>
    </div>
    <div class="sidebar-module sidebar-module-inset">
      <h4>标签们</h4>
      <ol class="list-unstyled">
        <slot v-for="tag in tags" >
          <router-link :to="{ path:'/tag/'+tag.name }" ><span :class="'am-badge '+'am-badge-'+tag.color+' am-round'">{{tag.name}}</span></router-link>&nbsp;
        </slot>
      </ol>
    </div>
  </aside>
</template>
<style scoped>
</style>
<script>
  export default {
    name: 'sidebar',
    mounted () {
      this.fetchTags()
    },
    data () {
      return {
        tags: [
          {
            name:'test',
            color:'success'
          }
        ],
        sides: [
          {
            title: '分类',
            modules: [
              {
                title: 'Vue',
                href: '/'
              },
              {
                title: 'webpack',
                href: '/'
              }
            ]
          },
          {
            title: '归档',
            modules: [
              {
                title: '暂无数据',
                href: '／'
              }
            ]
          }
        ]
      }
    },
    methods: {
      fetchTags () {
        console.log(`fetch tag`)
      }
    }
  }
</script>