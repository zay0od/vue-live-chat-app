import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'


//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser 
  if(!user){
    next({ name: 'Welcome'}) //go to welcome view if not logged in
  }
  next()//keep use in current route
}



const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser 
  if(user){
    next({ name: 'Chatroom'})
  }
  next()
}



const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
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
