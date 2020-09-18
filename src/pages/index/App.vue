<template>
  <div id="app">
    <div class="top">
      <div class="nav">
        <router-link to="/">首页</router-link> |
        <router-link to="/api">业务中心</router-link>
        <router-link to="/demo">案例分析</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less" scoped>
.top {
  height: 53px;
  width: 100%;
  background: rgb(2, 8, 23);
  position: fixed;
  top: 0;
  border-bottom: 1px solid #333;
  .nav {
    width: 1280px;
    margin: 0 auto;
    text-align: right;
    padding: 15px 0;
    > a {
      color: #fff;
      display: inline-block;
      padding-left: 30px;
      cursor: pointer;
    }
  }
}
</style>
