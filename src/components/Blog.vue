<template>
  <br><br>
  <div class="outer">
    <div class="container">
      <div class="row">
    <div class="col-sm-9 blog-main">
      <div class="blog-post">
        <h2 class="blog-post-title">{{blog_title}}</h2>
        <p class="blog-post-meta"><span class="glyphicon glyphicon-calendar"> </span> {{blog_publishtime}}</p>
        <p>暑假利用闲的没事干的时间，接触了一些前端mv*框架，其中<code>vue.js</code>就是我最先开始学习的框架</p>
        <h3>为什么选用vue?</h3>
        <p>轻量,简便</p>
        <h3>使用vue-cli来部署整个项目</h3>
        <pre><code>$ npm install -g -vue-cli<br>$ vue init webpack my-project<br>$ cd my-project<br>$ npm install<br>$ npm run dev</code></pre>
        <blockquote>
          <p>webpack相关：</p>
          <p><small>其实我根本不会</small></p>
        </blockquote>
        <h3>Sub-heading</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        </ol>
        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
      </div><!-- /.blog-post -->
<hr>
      <div class="blog-post">
        <h2 class="blog-post-title">Another blog post</h2>
        <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div><!-- /.blog-post -->

      <div class="blog-post">
        <h2 class="blog-post-title">New feature</h2>
        <p class="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
      </div><!-- /.blog-post -->

      <nav>
        <ul class="pager">
          <li><a href="#">Previous</a></li>
          <li><a href="#">Next</a></li>
        </ul>
      </nav>

    </div><!-- /.blog-main -->
    <div class="col-sm-3  blog-sidebar">
      <div class="sidebar-module sidebar-module-inset">
        <h4>分类</h4>
        <p>学习笔记</p>
        <ol class="list-unstyled">
          <li><a href="#">vue.js</a></li>
        </ol>
        <ol class="list-unstyled">
        <p>开发笔记</p>
          <li><a href="#">JavaScript优化</a></li>
          <li><a href="#">微信Oauth授权</a></li>
        </ol>
      </div>
      <div class="sidebar-module sidebar-module-inset">
        <h4>归档</h4>
        <ol class="list-unstyled">
          <li><a href="#">没有快滚</a></li>
        </ol>
      </div>
      <div class="sidebar-module sidebar-module-inset">
        <h4>链接</h4>
        <ol class="list-unstyled">
          <li><a href="https://miria.moe">ChionLab</a></li>
        </ol>
      </div>
    </div><!-- /.blog-sidebar -->
  </div><!-- /.row -->
    </div>
  </div>
</template>
<style>
  /*
   * Globals
   */

  body {
    color: #555;
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    margin-top: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    color: #333;
  }


  /*
   * Override Bootstrap's default container.
   */

  /*@media (min-width: 1200px) {*/
    /*.container {*/
      /*width: 970px;*/
    /*}*/
  /*}*/


  /*
   * Blog name and description
   */

  .blog-header {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .blog-title {
    margin-top: 30px;
    margin-bottom: 0;
    font-size: 60px;
    font-weight: normal;
  }
  .blog-description {
    font-size: 20px;
    color: #999;
  }


  /*
   * Main column and sidebar layout
   */

  .blog-main {
    font-size: 18px;
    line-height: 1.5;
  }

  /* Sidebar modules for boxing content */
  .sidebar-module {
    padding: 15px;
    margin: 0 -15px 15px;
  }
  .sidebar-module-inset {
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .sidebar-module-inset p:last-child,
  .sidebar-module-inset ul:last-child,
  .sidebar-module-inset ol:last-child {
    margin-bottom: 0;
  }


  /* Pagination */
  .pager {
    margin-bottom: 60px;
    text-align: left;
  }
  .pager > li > a {
    width: 140px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 30px;
  }


  /*
   * Blog posts
   */

  .blog-post {
    margin-bottom: 60px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .blog-post-title {
    margin-bottom: 5px;
    font-size: 40px;
  }
  .blog-post-meta {
    margin-bottom: 20px;
    color: #999;
  }


  /*
   * Footer
   */

  .blog-footer {
    padding: 40px 0;
    color: #999;
    text-align: center;
    background-color: #f9f9f9;
    border-top: 1px solid #e5e5e5;
  }

  .blog-footer p:last-child {
    margin-bottom: 0;
  }

  pre {
    background-color: #eee;
  }

  blockquote {
    border-left: 3px solid #D0E5F2;
  }

</style>
<script>
  export default {
    data () {
      return {
        'blog_title': '用vue-cli构建web项目',
        'blog_publishtime': '2016/7/27'
      }
    }
  }
</script>
