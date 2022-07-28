import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home'
import uiKit from '@/views/ui-kit/ui-kit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children: [
        {
          path: ':id',
          name: "category",
          component: home,
          children: [
            {
              path: ':subId',
                name: 'subCategory',
                component: home
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
