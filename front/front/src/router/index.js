import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //유저페이지
    {
      path: '/',
      name: 'mainpage',
      component: () => import('@/views/MainPage.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/Category.vue')
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
    //관리자 페이지
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('@/components/admin/LogIn.vue')
    },
    // 
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
