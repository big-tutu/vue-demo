import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../pages/Index'
// import Home from '@/pages/Home'
// import About from '@/pages/About'


// 异步加载组件
const Index = (resolve) => require(['@/pages/Index'], resolve)
const Home = () => import('@/pages/Home')
const About = () => import('@/pages/About')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router