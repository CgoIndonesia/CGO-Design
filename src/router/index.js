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
import {
  access
} from 'fs';
import sailingEmpty from '../views/sailing/index.vue'
import Tour from '../views/Tour/tour.vue'
import Transportation from '../views/Transportation/transportation.vue'
import MerchantForm from '../views/Merchant/Merchant.vue'
import Merchant from '../views/Home/Merchant.vue'
import Services from '../views/Home/Services.vue'
import AboutUs from '../views/Home/AboutUs.vue'
import Profile from '../views/Profile/Profile.vue'


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
      requiresAuth: true
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
  },
  // tour
  {
    path: '/Tour/tour',
    name: 'Tour',
    component: Tour
  },
  // transportation
  {
    path: '/Transportation/transportation',
    name: 'Transportation',
    component: Transportation
  },
  //
  {
    path: '/Merchant/merchant',
    name: 'Merchant',
    component: Merchant
  },
  //Services
  {
    path: '/Services/services',
    name: 'Service',
    component: Services
  },
  //Services
  {
    path: '/home/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  //profile 
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  //formulir
  {
    path: '/home/form',
    name: 'MerchantForm',
    component: MerchantForm
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
