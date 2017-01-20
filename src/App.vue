<template>
    <router-view></router-view>
</template>
<style>
  /*transition*/
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .expand-enter-active, .expand-leave-active {
    transition: all .5s ease;
  }
  .expand-enter, .expand-leave-active {
    padding: 0 0;
    opacity: 0;
  }
</style>
<script>
</script>
