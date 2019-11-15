import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import PrivacyPolicy from '../views/Home/PrivacyPolicy.vue'
import Faq from '../views/Home/Faq.vue'
import TermOfUse from '../views/Home/TermOfUse.vue'
import ContactUs from '../views/Home/ContactUs.vue'
import Register from '../views/Home/Register.vue'
import Validation from '../views/Home/Validation.vue'
import TopDestination from '../views/Destination/TopDestination.vue'
import RegiterSuccess from '../views/Home/Register-Success.vue'
import ForgotPassword from '../views/Home/Forgot-Password.vue'
import ChangePassword from '../views/Home/Change-Password.vue'
import Empty from '../views/Profile/Empty.vue'
import { access } from 'fs';
import sailingEmpty from '../views/sailing/index.vue'


Vue.use(VueRouter)

const routes = [
  // Home
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/home/faq',
    name: 'faq',
    component: Faq,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/home/register-success',
    name: 'register-success',
    component: RegiterSuccess
  },
  {
    path: '/home/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/home/change-password',
    name: 'change-password',
    component: ChangePassword
  },
  {
    path: '/home/termofuse',
    name: 'termofuse',
    component: TermOfUse
  },
  {
    path: '/home/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home/validation',
    name: 'validation',
    component: Validation
  },
  {
    path: '/home/contactus',
    name: 'contactus',
    component: ContactUs
  },
  // Destination
  {
    path: '/destination/topdestination',
    name: 'topdestination',
    component: TopDestination
  },
  // Profile
  {
    path: '/profile/empty',
    name: 'empty',
    component: Empty
  },
  // sailing
  {
    path: '/sailing/index',
    name: 'sailingEmpty',
    component: sailingEmpty
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
