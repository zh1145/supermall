import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Class = () => import('../views/class/Class')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/Shopcart')

// 安装路由
Vue.use(Router)

// 配置映射关系用中括号
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/class',
    component:Class
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
]

const router = new Router({
  routes,
  mode:'history'
})

// 3.导出router
export default router
