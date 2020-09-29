<template>
  <div class="mainPage">
    <div class="main">
      <img src="../../../../assets/image/banner.jpg" alt="" width="100%" />
    </div>
    <div class="box">
      <div class="title">欢迎登录</div>
      <div class="name item">
        <a-input v-model="name">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </div>
      <div class="password item">
        <a-input v-model="password">
          <a-icon slot="prefix" type="eye" />
        </a-input>
      </div>
      <div class="btn">
        <a-button type="primary" size="large" @click="toLogin">登录</a-button>
      </div>
      <div class="tip">输入任何用户名和密码即可</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Input, Icon } from 'ant-design-vue'
Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      window.location.href = '/home.html#/home'
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
  }
}
.box {
  width: 350px;
  padding: 30px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 4px;
  position: absolute;
  right: calc((100% - 1280px) / 2);
  top: 200px;
  .title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .tip {
    text-align: center;
    font-size: 12px;
    color: #888;
  }
}
.ant-btn {
  width: 290px !important;
  margin-bottom: 20px;
}
</style>
