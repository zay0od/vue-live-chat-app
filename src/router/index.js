import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'


//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('Current user in auth guard: ', user)
  if(!user){
    next({ name: 'Welcome'}) //go to welcome view if not logged in
  }

  next()//go to /Chatroom
  
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
