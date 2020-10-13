<template>
  <div class="wrapper">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <menuList></menuList>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0 20px">
          <mHeader @trigger="collapsed = !collapsed"></mHeader>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import menuList from './components/common/menu'
import mHeader from './components/common/mHeader'
export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    mHeader,
    menuList
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  /* padding-top: 69px; */
}
.ant-layout {
  height: 100%;
}
.ant-layout-content{
  padding: 0 !important;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  /* background-color: rgb(45, 58, 75) !important; */
  margin: 16px;
}
</style>
