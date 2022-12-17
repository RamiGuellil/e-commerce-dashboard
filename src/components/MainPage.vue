<template>
  <div>
    <NavBar v-model="isShow" />
    <v-app-bar flat>
      <v-app-bar-nav-icon
        @click="changeTemp()"
        class="d-flex d-lg-none"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        min-width="0"
        class="app-bar_icon-button"
        color="#A1A5B7"
        style="margin-right: 10px"
      >
        <v-badge bordered dot color="green-accent-4">
          <v-icon size="large">mdi-message</v-icon>
        </v-badge>
        <v-menu activator="parent">
          <v-list lines="two">
            <v-list-subheader>Messages</v-list-subheader>
            <v-list-item
              v-for="(message, index) in messages"
              :title="message.title + ' ' + (index + 1)"
              :subtitle="message.subtitle"
              :value="message.title"
              max-width="20em"
            >
              <template v-slot:prepend>
                <v-avatar :color="message.avatar_color">
                  <v-icon :color="message.icon_color">{{ message.icon }}</v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-btn
        min-width="0"
        class="app-bar_icon-button"
        color="#A1A5B7"
        style="margin-right: 10px"
      >
        <v-badge bordered dot color="green-accent-4">
          <v-icon size="large">mdi-bell</v-icon>
        </v-badge>
        <v-menu activator="parent" max-height="500">
          <v-img
              height="150"
              :src="Networking_Header"
              cover
              class="text-white rounded-t-lg"
            >
              <v-toolbar class="ma-5" color="rgba(0, 0, 0, 0)" theme="dark">
                <v-toolbar-title class="text-h6"> Notifications </v-toolbar-title>
                <template v-slot:append>
                  <div class="text-caption">{{notifications.length }} notifications</div>
                </template>
              </v-toolbar>
            </v-img>
          <v-list lines="two">
            <v-list-item
              v-for="(notification, index) in notifications"
              :title="notification.title + ' ' + (index + 1)"
              :subtitle="notification.subtitle"
              :value="notification.title"
              max-width="20em"
            >
              <template v-slot:prepend>
                <v-avatar :color="notification.avatar_color">
                  <v-icon :color="notification.icon_color">{{
                    notification.icon
                  }}</v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-avatar color="#A1A5B7" style="margin-right: 5px" class="app-bar_avatar">
        <v-img :src="Octocat" />
        <v-menu activator="parent" max-height="500">
          <v-list nav>
            <v-list-item>
              <v-row justify="center">
                <v-col cols="auto" class="pa-0">
                  <v-avatar
                    size="80"
                    @click=""
                    color="#A1A5B7"
                    class="app-bar_avatar ma-4"
                  >
                    <v-img :src="Octocat" />
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="auto" align-self="center" class="font-weight-medium pa-0">
                  {{ user.full_name }}
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="auto" align-self="center" class="text-disabled">
                  <div>@{{ user.username }}</div>
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-btn-toggle variant="outlined" divided v-model="online_status">
                <v-btn width="124"> Online </v-btn>
                <v-btn width="124"> Invisible </v-btn>
              </v-btn-toggle>
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-cog-outline"
              value="settings"
              active-color="#009ef7"
            >
              <div class="font-weight-medium">Settings</div>
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-exit-run"
              value="logout"
              active-color="#009ef7"
            >
              <div class="font-weight-medium">Log out</div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-avatar>
    </v-app-bar>
    <v-divider></v-divider>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
import Octocat from "@/assets/Octocat.png";
import Networking_Header from "@/assets/Networking-Header.jpg"
export default {
  components: {
    NavBar,
  },
  setup() {
    const isShow = ref(true);
    const online_status = ref(0);
    const user = { full_name: "Jonas Walker", username: "admin" };
    const notifications = [
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
      {
        title: "Notification",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-information-outline",
        avatar_color: "amber-lighten-5",
        icon_color: "amber-lighten-2",
      },
    ];
    const messages = [
      {
        title: "Message",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-email",
        avatar_color: "blue-lighten-5",
        icon_color: "blue-lighten-2",
      },
      {
        title: "Message",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-email",
        avatar_color: "blue-lighten-5",
        icon_color: "blue-lighten-2",
      },
      {
        title: "Message",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-email",
        avatar_color: "blue-lighten-5",
        icon_color: "blue-lighten-2",
      },
      {
        title: "Message",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: "mdi-email",
        avatar_color: "blue-lighten-5",
        icon_color: "blue-lighten-2",
      },
    ];
    return { isShow, online_status, user, notifications, messages };
  },
  methods: {
    changeTemp() {
      this.isShow = true;
    },
  },
  computed: {
    Octocat() {
      return Octocat;
    },
    Networking_Header(){
      return Networking_Header;
    }
  },
};
</script>
<style scoped>
.app-bar_icon-button:hover .v-icon {
  color: #009ef7 !important;
}
.app-bar_avatar {
  cursor: pointer;
}
</style>
