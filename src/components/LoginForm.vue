<template>
    <form @submit.prevent="handleSubmit">

        <input type="email" placeholder="email" v-model="email" required>
        <input type="password" placeholder="password" v-model="password" required>
        <button> Login </button>

    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        // refs 
        const email = ref('')
        const password = ref('')


        //methods
        const handleSubmit = () => {
            console.log( email.value, password.value )

        }


        return { email, password, handleSubmit}
    }

}
</script>

<style>

</style>