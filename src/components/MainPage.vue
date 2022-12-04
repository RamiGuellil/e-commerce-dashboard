<template>
  <NavBar v-model="isShow" />
  <v-app-bar flat>
    <v-app-bar-nav-icon
      @click="changeTemp()"
      class="d-flex d-lg-none"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn min-width="0" class="app-bar_icon-button" color="#A1A5B7" style="margin-right: 10px">
      <v-icon size="large">mdi-message</v-icon>
    </v-btn>
    <v-btn min-width="0" class="app-bar_icon-button" color="#A1A5B7" style="margin-right: 10px">
      <v-icon size="large">mdi-bell</v-icon>
    </v-btn>
    <v-avatar @click="" color="#A1A5B7" style="margin-right: 5px" class="app-bar_avatar">
      <v-img :src="Octocat" />
    </v-avatar>
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
import { ref } from "vue";
import Octocat from '@/assets/Octocat.png'
export default {
  components: {
    NavBar,
  },
  setup() {
    const isShow = ref(true);
    return { isShow };
  },
  methods: {
    changeTemp() {
      this.isShow = true;
    },
    showMenu(){
      console.log('I am here');
    }
  },
  computed: {
    Octocat(){
      return Octocat;
    }
  }
};
</script>
<style scoped>
.app-bar_icon-button:hover .v-icon{
  color: #009ef7 !important;
}
.app-bar_avatar{
  cursor: pointer;
}
</style>
