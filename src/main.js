import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/main.css'

//import firebase auth service
import { projectAuth } from './firebase/config'


let app

//this function will run each time the user state changes
projectAuth.onAuthStateChanged( () => {

    //it will only Re-create the app once the, when the data is loaded from firebase
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})
