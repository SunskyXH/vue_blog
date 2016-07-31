<template>
  <div class="container1">
      <navbar> </navbar>

    <div class="container">
      <blog> </blog>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Blog from './components/Blog'
export default {
  components: {
    Navbar,
    Blog
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    background-color: #eee;
  }
</style>
