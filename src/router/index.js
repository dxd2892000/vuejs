import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import Home from '@/views/layout/Home'
import Details from '@/views/layout/Details'
import Profile from '@/views/user/Profile'
import Contact from '@/views/layout/Contact/Contact'
import News from '@/views/layout/News/News'
import DetailNews from '@/views/layout/News/DetailNews'
import DetailCategory from '@/views/layout/Category/DetailCategory'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail',
      name: 'Details',
      component: Details
    },
    {
      path: '/detailnews/:id',
      name: 'DetailNews',
      component: DetailNews
    },
    {
      path: '/detailCategory/:id',
      name: 'DetailCategory',
      component: DetailCategory
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`,
  
  })

  router.beforeEach((to, from, next) => {
    var token = !!localStorage.getItem('token');
    if (to.name !== 'Login' && to.name !== 'Register'&& token === false) next({ name: 'Login' })
    else next()
    if (token === true && (to.name === 'Login' || to.name === 'Register')) next({ name: 'Home' })
    else next()
  })
  
  export default router
