import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index/index.vue'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('../views/api/index.vue'),
    meta: { title: '业务中心', keepAlive: false }
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo/index.vue'),
    meta: { title: '案例分析', keepAlive: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
