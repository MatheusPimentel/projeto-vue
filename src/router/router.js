import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import PrivateTemplate from '../components/templates/PrivateTemplate'
import store from '../store/store'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/private/*',
      name: 'PrivateTemplate',
      redirect: '/private/main',
      component: PrivateTemplate,
      beforeEnter (to, from, next) {
        if (store.state.sessao) {
          next()
        } else {
          next('/')
        }
      },
      children: [
        {
          path: '/private/main',
          name: 'main',
          component: Main
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter (to, from, next) {
        if (store.state.sessao) {
          next(from.name)
        } else {
          next()
        }
      }
    }
  ]
})
