import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import Home from '@/views/layout/Home'
import Details from '@/views/layout/Details'
import Profile from '@/views/user/Profile'
import Contact from '@/views/layout/Contact'
import News from '@/views/layout/News'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'NONE',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Details',
      component: Details
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
    if (to.name !== 'Login' && to.name !== 'Register'&& !localStorage.getItem('token')) next({ name: 'Login' })
    else next()
  })
  
  export default router
