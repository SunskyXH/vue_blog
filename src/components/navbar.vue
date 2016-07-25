<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Sunsky</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="/">首页</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-bell"></span></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {{username}}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span>个人中心</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-cog"></span>设置</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="/logout/">退出登陆</a></li>
            </ul>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        username: 'sunsky'
      }
    }
  }
</script>

<style>
  body {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .navbar {
    margin-bottom: 20px;
  }
</style>
