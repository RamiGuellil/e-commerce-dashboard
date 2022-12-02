<template>
  <NavBar v-model="isShow"/>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="changeTemp()" class="d-flex d-lg-none"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-divider></v-divider>
  <v-layout full-height style="background-color: #f4f4f4">
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-layout>
</template>
<script>
import NavBar from "./NavBar.vue";
import {ref} from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const isShow = ref(true);
    return {isShow};
  },
  methods: {
    changeTemp(){
        this.isShow = true;
    }
  }
};
</script>
