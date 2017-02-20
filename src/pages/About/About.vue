<template>
  <div class="outer">
    <div class="article">
      <div class="article-inner">
        <header class="article-header-about">
          <h1 class="thumb">
            <span class="article-title">关于我</span>
          </h1>
        </header>
        <div class="article-entry" >
          <div style="text-align: center; width: 100%">
            <div style="width: 120px;height: 70px;border-radius: 60px;overflow: hidden;margin-left:auto;margin-right:auto">
              <img src="../../assets/photo.jpg">
            </div>
            <h2>香香鸡</h2>
          </div>
          <table>
            <tr>
              <td>GitHub:</td>
              <td><a href="https://github.com/SunskyXH" target="_blank" rel="external">SunskyXH</a></td>
            </tr>
            <tr>
              <td>E-mails:</td>
              <td><a href="#" target="_blank" rel="external">SunskyXH@gmail.com</a>, <a href=#>y445360776@qq.com</a></td>
            </tr>
          </table>
          <p>
            爱好摸鱼，擅长摸鱼, 立志成为全菜工程师的切图仔
          </p>
          </div>
          <footer class="article-footer">
            <span class="article-tag-link">举报</span>
          </footer>
        </div>
    </div>
  </div>
</template>
<style scoped>
 .outer {
    min-height: 585px;
    max-width: 1040px;
    margin: 0 auto;
    padding: - 20px;
  }
  .article {
    color: #555;
    margin: 50px 0;
    font-family: Menlo, "open sans", "Helvetica Neue", Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  }
  .article-inner {
    overflow: hidden;
    border: 0px solid #eef1f8;
    background: #fff;
    border-radius: 3px;
  }
  .article-header-about {
    text-align: left;
  }
  .article-header .thumb {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .article-title {
    text-decoration: none;
    font-weight: bold;
    color: #555;
    line-height: 1.1em;
    -webkit-transition: color 0.2s;
    -moz-transition: color 0.2s;
    -ms-transition: color 0.2s;
    transition: color 0.2s;
  }
  
  .article-entry {
    color: #606060;
    padding: 0 20px;
  }
  
  .article-footer {
    font-size: 0.85em;
    line-height: 1.6em;
    border-top: 1px solid rgba(208,211,248,0.25);
    padding-top: 1.6em;
    margin: 0 20px 20px;
  }
  .article-tag-link {
    display: inline-block;
    font-size: 0.9em;
    line-height: 1em;
    padding: 8px 15px;
    border-radius: 15px;
    background: #f9fbfd;
    border: 1px solid #eef1f8;
    color: #42b983;
    text-decoration: none;
    -webkit-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
</style>
<script>
export default {
}
</script>
