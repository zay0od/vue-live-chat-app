<template>
    <form @submit.prevent="handleSubmit">

        <input type="email" placeholder="email" v-model="email" required>
        <input type="password" placeholder="password" v-model="password" required>
        <div class="error">{{ error }}</div>
        <button> Login </button>

    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../services/useLogin'
export default {
    setup(props, context){
        const { error, login } = useLogin()
        // refs 
        const email = ref('')
        const password = ref('')


        //methods
        const handleSubmit = async () => {
            await login(email.value, password.value)

            if(!error.value){
                console.log("user Logged in")
                context.emit('login') //Raise an event 

            }

        }


        return { email, password, error, handleSubmit}
    }

}
</script>

<style>

</style>