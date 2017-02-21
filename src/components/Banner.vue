<template>
    <header id="header">
    <div id="banner">
      <div id="homelogo" class="homelogo">
        <div class="homelogoback" style="border: 1px solid #404040">
          <h1 style='color: #000;'>LIT THE BONFIRE</h1>
          <h3 style='color: #000;'>link the fire, kindle the flame.</h3>
        </div>
      </div>
    </div>
    <div class="navigate">
      <p class="navigater-list">
        <slot v-for='link in links'>
          <router-link id="beautifont" class="main-nav-link" :to="link.href">{{link.name}}</router-link>
        </slot>
        <a id="beautifont" class="main-nav-link" href="https://github.com/SunskyXH">Github</a>
      </p>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'banner',
    data () {
      return {
        links: [
          {
            name: 'Home',
            href: '/'
          },
          {
            name: 'Category',
            href: '/category'
          },
          {
            name: 'Tag',
            href: '/tag'
          },
          {
            name: 'Archive',
            href: '/archive'
          },
          {
            name: 'About Me',
            href: '/about'
          },
        ]
      }
    },
    methods: {
    }
  }

</script>
<style scoped>
  
  #header {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  #banner {
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/banner.png);
    background-size: cover;
    width: 100%;
    height: 100%;
    margin-bottom: -5px;
    user-select: none;
    text-align: center;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  #homelogo {
    background: rgb(255, 255, 255);
    width: 500px;
    margin-left: -250px;
  }
  .homelogo {
    max-width: 500px;
    height: auto;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    opacity: 0.9;
  }
  .homelogoback {
    overflow: hidden;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    filter: alpha(opacity=90);
    -moz-opacity: 0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;
  }
  .navigate {
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #eef1f8;
    background: rgba(255,255,255,.9);
    user-select: none;
  }
  .navigate > p {
    text-align: center;
    margin: 0px;
  }
  .navigater-list {
    font-family: Operator Mono, Melon, 微软雅黑, Arial, simsun, 宋体;
    color: rgb(68, 68, 68);
    font-weight: 100;
    font-size: 1.2em;
  }
  .navigater-list > a {
    padding: 25px 20px 25px 20px;
    line-height: 60px;
  }
  .navigater-list>a:hover {
    color: #42b983;
    border-bottom: 5px solid #42b983;
    text-decoration: none;
}

</style>
