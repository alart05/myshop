import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Collection from '@/pages/Collection'
import Product from '@/pages/Product'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main'
    },
    {
      path: '/collection/:clothes',
      component: Collection,
      name: 'Collection'
    },
    {
      path: '/product/:id',
      component: Product,
      name: 'Product'
    },
  ]
})

export default routes;