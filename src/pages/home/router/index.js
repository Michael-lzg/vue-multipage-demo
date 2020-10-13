import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('../views/index/index.vue'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/other',
    component: () => import('../views/other/index.vue'),
    meta: { title: '其他', keepAlive: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
