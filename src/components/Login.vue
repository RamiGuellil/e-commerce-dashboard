<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-text-field label="User Name" />
      <v-text-field type="password" label="Password" />
    </v-card-text>
    <v-card-actions>
      <v-btn width="100%" color="primary" variant="flat" dark @click="login()">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import router from "@/router";
export default {
  setup() {},
  methods: {
    login(){
        router.replace("/");
    }
  }
};
</script>
