import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { settings } from './settings'
import Login from '@/pages/Login.vue'
import Operator from '@/pages/Operator.vue'
import Distributor from '@/pages/Distributor.vue'
import Partner from '@/pages/Partner.vue'
import Customer from '@/pages/Customer.vue'

const routes: RouteRecordRaw[] = [
  {
    path: settings.routes.login,
    component: Login
  },
  {
    path: settings.routes.operator,
    component: Operator
  },
  {
    path: settings.routes.distributor,
    component: Distributor
  },
  {
    path: settings.routes.partner,
    component: Partner
  },
  {
    path: settings.routes.customer,
    component: Customer
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: settings.routes.login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
