<template>
    <footer id="footer">
        <div class="container">
            <div class="row">
                <p> Theme modify from <a href="https://github.com/iTimeTraveler/hexo-theme-hiker" target="_blank">Hexo-theme-hiker</a> </p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
    #footer {
        width: 100%;
        background: #f0f0f0;
        text-align: center;
        color: #88888b;
        padding: 30px 0 15px;
        line-height: 22px;
        border-color: #e0e0e0;
        font-size: 0.85em;
    }
    @media (min-width: 1200px) {
        .container {
            width: 940px;
        }
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .row {
        margin-right: -15px;
        margin-left: -15px;
    }
    p {
        margin: 0 0 10px;
    }
</style>
<script>
    export default {
        name: 'footbar',
    }
</script>