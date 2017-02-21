<template>
    <header>
        <div id="allheader" class="navbar navbar-default navbar-static-top">
            <div class="navbar-inner">
                <div class="container">
                    <router-link to="/" class="brand" style="margin-top: 0px;">
                        <img src="../assets/sun.png" width="124px" height="124px" alt="bonfire">
                    </router-link>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <slot v-for="link in links">
                            <li><router-link class="main-nav-link" :to='link.href'>{{link.name}}</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style>
    #allheader {
        background: transparent;
        z-index: 2;
    }
    @media (min-width: 768px){
        .navbar-static-top {
            border-radius: 0;
        }
    }
    .navbar-static-top {
        z-index: 1000;
        border-width: 0 0 1px;
    }
    .navbar {
        position: relative;
        min-height: 50px;
        margin-bottom: 0px;
        border: 1px solid transparent;
    }
    .navbar-inner {
        min-height: 90px;
        -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.1);
        box-shadow: 0 0 5px rgba(0,0,0,0.1);
        border-top: 2px solid #42b983;
    }
    @media (min-width: 1200px) {
        .container {
            width: 940px;
        }
    }
    @media (min-width: 992px) {
        .container {
            width: 900px;
        }
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .brand {
        float: left;
        display: block;
        position: absolute;
        z-index: 1500;
        font-size: 20px;
        font-weight: 200;
        color: #555;
        border-style: solid;
        border-color: rgba(24,24,21,0.07);
        border-width: 0 8px 8px 8px;
    }
    .navbar-default .navbar-collapse, {
        border-color: #e7e7e7;
    }
    @media (min-width: 768px) {
        .container > .navbar-header, 
        .container > .navbar-collapse {
            margin-right: 0;
            margin-left: 0;
        }
    }
    @media (min-width: 768px){
        .navbar-collapse.collapse {
            display: block !important;
            height: auto !important;
            padding-bottom: 0;
            overflow: visible !important;
        }
    }
    @media (min-width: 768px){
        .navbar-collapse {
            width: auto;
            border-top: 0;
            box-shadow: none;
        }
    }
    .navbar-collapse {
        max-height: 340px;
        padding-right: 15px;
        padding-left: 15px;
        overflow-x: visible;
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        -webkit-overflow-scrolling: touch;
    }
    .nav {
        position: relative;
        left: 0;
        display: block;
        float: right;
        margin: 20px 0 0 0;
        font-family: Microsoft JhengHei,Roboto,Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: .1px;
        padding-left: 0;
        list-style: none;
    }
    @media (min-width: 768px){
        .navbar-nav > li {
            float: left;
        }
    }
    .nav > li {
        position: relative;
        display: block;
    }
    .navbar-default .navbar-nav > li > a {
        color: #555;
    }
    @media (min-width: 768px){
        .navbar-nav > li > a {
            padding-top: 15px;
            padding-bottom: 15px;
            line-height: 20px;
        }
    }
    .nav > li > a {
        position: relative;
        display: block;
        padding: 10px 15px;
    }
    .nav > li > a:hover {
        color: #42b983;
        border-bottom: 5px solid #42b983;
        text-decoration: none;
    }
</style>
<script>
export default {
    name: 'navbar',
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
    }
}
</script>