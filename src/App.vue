<template>
  <v-app>
    <v-main>
      <Login v-if="!isAuth" @isLogin="isAuth = $event"></Login>
      <MainPage v-else></MainPage>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";
import Login from "@/components/Login.vue";
import MainPage from '@/components/MainPage.vue'
export default {
  components: {
    Login,
    MainPage
  },
  setup() {
    const isAuth = ref(false);
    return {
      isAuth,
    };
  },
};
</script>
