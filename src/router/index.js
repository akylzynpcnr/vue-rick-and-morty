import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/episode/',
    name: 'Episode',
    component: () => import(/* webpackChunkName: "episode" */ '../views/Episode.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
