import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, displayName) => {// async functions always return a promise
    error.value  = null //reset error value

    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res){
            throw new Error('Could not Signup!')
        }
        await res.user.updateProfile({ displayName }) //displayName is pre defined in firebase
        error.value = null;

        return res

    }catch(err){

        console.log(err.message)
        error.value = err.message

    }
} 


const useSignup = () =>{
    return { error, signup }
}


export default useSignup