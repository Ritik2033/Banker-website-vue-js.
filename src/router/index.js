import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Post from '../views/Post.vue'
import web from '../views/web.vue'
import loginpage from '../views/loginpage.vue'
import Register  from '../views/Register.vue'
import userdata from '../views/userdata.vue'
import merphy from '../views/merphy.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'HomeView',
    component: HomeView, 
  },
  {
    path: '/dashboard',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
  },
  {
    path: '/web',
    name: 'web',
    component: web,
  },
  {
    path: '',
    name: 'loginpage',
    component: loginpage,
  },

  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },

  {
    path: '/userdata/:page',
    name: 'userdata',
    component: userdata,
  },

  {
    path: 'merphy',
    name: 'merphy',
    component: merphy,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
