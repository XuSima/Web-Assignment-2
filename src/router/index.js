import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Students from '@/components/Students'
import Add from '@/components/Add'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import Edit1 from '@/components/Edit1'
import Add1 from '@/components/Add1'
import Teachers from '@/components/Teachers'
import Login from '@/components/Login'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/students',
      name: 'Students',
      component: Students,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/teachers',
      name: 'Teachers',
      component: Teachers,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/add1',
      name: 'Add1',
      component: Add1,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/edit1',
      name: 'Edit1',
      component: Edit1,
      props: true,
      meta: {
        need2Login: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
