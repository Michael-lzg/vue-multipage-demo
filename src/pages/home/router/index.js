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
    path: '/chinaMap',
    component: () => import('../views/map/chinaMap.vue'),
    meta: { title: '中国地图', keepAlive: false }
  },
  {
    path: '/bubble',
    component: () => import('../views/map/bubble.vue'),
    meta: { title: '气泡图', keepAlive: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
