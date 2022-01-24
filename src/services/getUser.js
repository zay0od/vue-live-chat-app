import { ref } from 'vue'
import { projectAuth } from '../firebase/config'


const user = ref(projectAuth.currentUser)//load current user state

//get the latest user state
projectAuth.onAuthStateChanged( _user => {
    console.log("user state changed: ", _user)
    user.value = _user
})


const getUser = () => {
    return { user }
}


export default getUser