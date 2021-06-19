import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../views/ToDo'

const load = (component) => () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo-list',
    component: ToDo
  },
  {
    path: '/Arc-hive',
    name: 'arch-ive',
    component: load('Archive')
  },
  {
    path: '/calcu-lator',
    name: 'calcu-lator',
    component: load('Calculator')
  },
  {
    path: '/ti-mer',
    name: 'ti-mer',
    component: load('Timer')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router