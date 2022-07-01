import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'
import MyPage from './MyPage.vue'
import Admin from './Manager.vue'
import Home from './Home.vue'
import Store from './Store.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/mypage',
      component: MyPage,
      meta: {
        auth: true
      }
    },
    {
      path: '/admin',
      component: Admin,
    },
    {
      path: '/store',
      component: Store,
    }
  ]
})
