import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home'
import uiKit from '@/views/ui-kit/ui-kit'
import error from "@/views/error/error";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      layout: 'layout-catalog'
    },
    children: [
      {
        path: 'category-:id',
        name: 'category',
        meta: {
          layout: 'layout-catalog'
        },
        children: [
          {
            path: 'subCategory-:subId',
            name: 'subCategory',
            meta: {
              layout: 'layout-catalog'
            },
          },
        ]
      }
    ]
  },
  {
    path: '/ui-kit',
    name: 'ui-kit',
    component: uiKit,
    meta: {
      layout: 'layout-default'
    }
  },
  {
    path: '*',
    name: 'error',
    component: error,
    props: true,
    meta: {
      layout: 'layout-error',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
