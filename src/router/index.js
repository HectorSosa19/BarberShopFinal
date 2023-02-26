import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/BarberList',
    name: 'BarberList',
    component: () => import(/* webpackChunkName: "BarberList" */ '../views/BarberList.vue')
  },
  {
    path: '/Appointment',
    name: 'Appointment',
    component: () => import(/* webpackChunkName: "BarberList" */ '../views/Appointment.vue')
  },
  {
    path: '/TypeHairCut',
    name: 'TypeHairCut',
    component: () => import(/* webpackChunkName: "BarberList" */ '../views/TypeHairCut.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "BarberList" */ '../views/Admin.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "BarberList" */ '../views/Map.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
