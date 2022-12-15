<template>
  <v-app >
    <v-main>
      <template v-if="isAuth">
        <MainPage style="background-color: #f4f4f4; min-height: 100vh"></MainPage>
      </template>
      <Login v-else @isLogin="isAuth = $event"></Login>
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
