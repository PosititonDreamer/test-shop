import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home'
import errorCategory from '@/views/home/errorCategory/errorCategory'
import uiKit from '@/views/ui-kit/ui-kit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children: [
      {
        path: 'category-:id',
        name: 'category',
        children: [
          {
            path: 'subCategory-:subId',
            name: 'subCategory'
          },
          {
            path: 'error',
            name: 'errorCategory',
            component: errorCategory
          }
        ]
      }
    ]
  },
  {
    path: '/ui-kit',
    name: 'ui-kit',
    component: uiKit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
