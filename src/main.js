import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/Style.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
<<<<<<< HEAD
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas,
  faUser,
  faSearch,
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
=======
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUser, faSearch, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
>>>>>>> d11a06388e9e24feaacbbc00b9c3dc90057d78c6

library.add(fas, faUser,
  faSearch,
  faEnvelope,
  faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
