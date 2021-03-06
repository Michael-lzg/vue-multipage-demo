import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../../assets/css/reset.css'
import '../../assets/css/common.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
