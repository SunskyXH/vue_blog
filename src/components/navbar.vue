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
          <li v-if="log_status"><a href="#"><span class="glyphicon glyphicon-bell"></span></a></li>
          <li class="dropdown" v-if="log_status">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {{username}}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" >
              <li><a href="#"><span class="glyphicon glyphicon-user"></span>个人中心</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-cog"></span>设置</a></li>
              <li role="separator" class="divider"></li>
              <li><a @click="logout"><span class="glyphicon glyphicon-log-out"></span>退出登陆</a></li>
            </ul>
          </li>
          <li v-if="!log_status"><a data-toggle="modal" data-target="#loginModal"><span class="glyphicon glyphicon-log-in"></span></a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav><!--/.navbar -->
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="exampleModalLabel">停一停,请先登录</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label class="control-label">用户名:</label>
              <input type="text" class="form-control" id="inputUsername">
            </div>
            <div class="form-group">
              <label class="control-label">密码:</label>
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-success" @click="login">登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: 'sunsky',
        log_status: true
      }
    },
    methods: {
      logout: function () {
        this.log_status = false
      },
      login: function () {
        this.log_status = true
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
