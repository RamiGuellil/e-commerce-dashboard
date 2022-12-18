<template>
  <v-layout full-height :style="{'background-image': 'url('+login_background+')', 'background-position': 'center', 'background-size' : 'cover'}">
    <v-row align="center" justify="center">
      <v-col align-self="center" cols="4" md="4" lg="4" xl="4" sm="12" xs="12">
        <v-card>
          <v-card-title class="text-center mt-5">Login</v-card-title>
          <v-card-subtitle class="text-center mb-5"
            >Please enter your login and password!</v-card-subtitle
          >
          <v-card-text>
            <v-text-field
              density="compact"
              :variant="false"
              bg-color="#f4f4f4"
              v-model="username"
              placeholder="User Name"
              :rules="[(v) => !!v || 'Field is required']"
              class="mb-2"
            />
            <v-text-field
              density="compact"
              :variant="false"
              bg-color="#f4f4f4"
              v-model="password"
              type="password"
              placeholder="Password"
              :rules="[(v) => !!v || 'Field is required']"
              class="mb-4"
            />
            <v-row align="center" justify="center">
              <v-col align-self="center">
                <v-checkbox hide-details label="Remember me"></v-checkbox>
              </v-col>
              <v-col cols="auto" align-self="center">
                <v-sheet>
                  <router-link to="#" class="text-decoration-none black-lighten-3">
                    Forgot password?
                  </router-link>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" variant="flat" dark @click="login()"
              >Login</v-btn
            >
          </v-card-actions>
          <v-divider class="ma-5"></v-divider>
          <v-card-actions>
            <v-btn
              prepend-icon="mdi-google"
              block
              variant="outlined"
              dark
            >
              Sing In With Google</v-btn
            >
          </v-card-actions>
          <v-card-actions class="mb-5">
            <v-btn
              color="#1DA1F2"
              prepend-icon="mdi-twitter"
              block
              variant="outlined"
              dark
            >
              Sing In With twitter</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import router from "@/router";
import { ref } from "vue";
import login_background from "@/assets/v748-toon-103.jpg"
export default {
  setup() {
    const username = ref("admin");
    const password = ref("admin");
    return {
      username,
      password,
    };
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
  computed: {
    login_background(){
      return login_background;
    }
  },
};
</script>
