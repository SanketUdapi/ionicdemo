import { createRouter, createWebHistory } from '@ionic/vue-router';


import Page1 from "../views/page1"
import Home from "../views/Home"

const routes  = [
  {
    path: '/',
    redirect: '/whichOrder'
  },
  {
    path: '/whichOrder',
    component: Page1
  },
  {
    path: '/whichOrderInner',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
