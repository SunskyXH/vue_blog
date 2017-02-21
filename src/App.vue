<template>
  <div id="bonfire">
    <div class="warp">
      <transition name="expand" mode="out-in">
        <banner v-if="$route.path==='/'"></banner>
        <navbar v-else></navbar>
      </transition>
      <transition name="expand" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
      <footbar></footbar>
    </div>
  </div>
</template>
<style scoped>
  #bonfire {
    height: 100%;
  }
  #container {
    position: relative;
    height: 100%;
  }
  .warp {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: 0.2s ease-out;
    -moz-transition: 0.2s ease-out;
    -ms-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
    z-index: 1;
  }
</style>
<script>
  import Banner from './components/Banner'
  import Navbar from './components/Navbar'
  import Footbar from './components/Footbar'
  import Sidebar from './components/Sidebar'
  import store from './store/index'
  export default {
    name: 'index',
    components: {
      Sidebar,
      Banner,
      Navbar,
      Footbar
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
