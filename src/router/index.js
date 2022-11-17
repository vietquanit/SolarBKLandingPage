import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from './../store/index'

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
    component: () => import(/* webpackChunkName: "InputForm" */ '../views/InputForm.vue'), 
    meta: { requiresLogin: true}
  },
  {
    path: '/form-get-link',
    name: 'FormGetLink',
    component: () => import(/* webpackChunkName: "FormGetLink" */ '../views/FormGetLink.vue'), 
    meta: { requiresLogin: true}
  },
  {
    path: '/survey-internal/:hashInfo',
    name: 'SurveyInternal',
    component: () => import(/* webpackChunkName: "SurveyInternal" */ '../views/FormSurveyInternal.vue'), 
    meta: { requiresLogin: true}
  },
  {
    path: '/survey-customer/:hashInfo',
    name: 'SurveyCustomer',
    component: () => import(/* webpackChunkName: "SurveyCustomer" */ '../views/FormSurveyCustomer.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "Report" */ '../views/ReportView.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.authenticated == false) {
    return { name: 'LoginView' }
  }
})

export default router
