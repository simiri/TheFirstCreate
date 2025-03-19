import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginPage.vue'
import Register from '../components/RegisterPage.vue'
import Home from '../components/framework/HomePage.vue'
import OidcPage from '../components/OidcProvider.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path:'/OidcPage',
    name:'OidcPage',
    component:  OidcPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router