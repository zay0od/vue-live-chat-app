<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatFormVue />
  </div>
</template>

<script>
import NewChatFormVue from "../components/NewChatForm.vue";
import Navbar from "../components/Navbar.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "../services/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  components: { Navbar, NewChatFormVue, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
</style>