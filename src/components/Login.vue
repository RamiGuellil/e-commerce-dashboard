<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-text-field v-model="username" label="User Name" />
      <v-text-field v-model="password" type="password" label="Password" />
    </v-card-text>
    <v-card-actions>
      <v-btn block color="primary" variant="flat" dark @click="login()"
        >Login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
import router from "@/router";
import { ref } from "vue";
export default {
  setup() {
    const username = ref('admin');
    const password = ref('admin');
    return {
      username, password
    }
  },
  mounted() {
    router.push("/");
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "admin") {
        this.$emit("isLogin", true);
      }
    },
  },
};
</script>
