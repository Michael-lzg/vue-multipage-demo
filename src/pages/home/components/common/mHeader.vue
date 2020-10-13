<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="trigger" />

      <a-breadcrumb style="display:inline-block;margin-left:15px">
        <a-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{item}}</a-breadcrumb-item>
      </a-breadcrumb>

      <div class="fr" style="margin-left:15px">
        <img src="../../../../assets/logo.png" width="30" style="border-radius:30px;">
      </div>
      <div class="name fr">
        <a-dropdown>
          <a>lzg
            <a-icon type="caret-down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">github文档</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">修改资料</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="notice fr">
        <span style="margin-right:24px">
          <a-badge :count="3">
            <a-icon type="qq" style="font-size:20px;margin-top:4px" />
          </a-badge>
        </span>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapGetters(['breadcrumbList'])
  },
  methods: {
    trigger () {
      this.$emit('trigger')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
