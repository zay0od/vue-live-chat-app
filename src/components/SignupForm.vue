<template>
    <form @submit.prevent="handleSubmit">

        <input type="text" placeholder="display name" v-model="displayName" required>
        <input type="email" placeholder="email" v-model="email" required>
        <input type="password" placeholder="password" v-model="password" required>
        <div class="error"> {{ error }} </div>
        <button> Sign up </button>

    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../services/useSignup'

export default {
    setup(){

        const { error , signup} = useSignup()

        // refs 
        const displayName = ref('')
        const email = ref('')
        const password = ref('')


        //methods
        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            console.log('User signed up')

        }



        return { displayName, email, password, error, handleSubmit}
    }

}
</script>

<style>

</style>