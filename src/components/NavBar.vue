<template>
  <v-navigation-drawer
    :modelValue="isShowProp"
    theme="dark"
    style="background-color: #1e1e2d"
    :rail="isMin"
    floating
    class="height-app"
  >
    <template v-slot:prepend>
      <v-list-item lines="two" nav>
        <v-row justify="center">
          <v-col v-if="!isMin" cols="3"
            ><v-img width="100%" :src="logo" alt="logo"></v-img
          ></v-col>
          <v-col v-if="!isMin" cols="5" align-self="center" style="font-size: 1.2em"
            >Vuetify 3</v-col
          >
          <v-col cols="3"
            ><v-btn
              class="nav-bar_button d-none d-lg-flex"
              variant="plain"
              icon
              size="small"
              @click="minNavBar()"
            >
              <v-icon size="large" class="min-nav-bar_btn_icon" :class="{ rotate: isMin }"
                >mdi-chevron-double-left</v-icon
              >
            </v-btn></v-col
          >
        </v-row></v-list-item
      >
    </template>

    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        to="/dashboard"
        title="Dashboard"
        value="dashboard"
        active-color="#009ef7"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-tag"
        to="/products"
        title="Products"
        value="products"
        active-color="#009ef7"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-basket"
        to="/orders"
        title="Orders"
        value="orders"
        active-color="#009ef7"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-google-analytics"
        to="/analytics"
        title="Analytics"
        value="analytics"
        active-color="#009ef7"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import logo from "@/assets/logo.svg";
import { ref } from "vue";
export default {
  props: {
    isShowProp: Boolean,
  },
  setup() {
    const isMin = ref(false);
    const isShow = ref(true);
    return { isMin, isShow };
  },
  methods: {
    minNavBar() {
      this.isMin = !this.isMin;
    },
  },
  watch: {},
  mounted() {},
  computed: {
    logo() {
      return logo;
    },
  },
};
</script>
<style scoped>
.nav-bar_button:hover {
  color: #009ef7;
}
.min-nav-bar_btn_icon {
  transition: transform 0.3s ease-in-out !important;
}

.min-nav-bar_btn_icon.rotate {
  transform: rotate(180deg);
}
</style>
