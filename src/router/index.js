import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "LoginView" */ '../views/LoginView.vue')
  },
  {
    path: '/input-form',
    name: 'InputForm',
    component: () => import(/* webpackChunkName: "InputForm" */ '../views/InputForm.vue')
  },
  {
    path: '/survey-internal',
    name: 'SurveyInternal',
    component: () => import(/* webpackChunkName: "InputForm" */ '../views/FormSurveyInternal.vue')
  },
  {
    path: '/survey-customer',
    name: 'SurveyCustomer',
    component: () => import(/* webpackChunkName: "InputForm" */ '../views/FormSurveyCustomer.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
