<template>
  <v-navigation-drawer>
    <v-avatar>
      <v-icon>mdi-apps</v-icon>
    </v-avatar>
    <v-list>
      <v-list-item>
        <router-link style="text-decoration: none;" to="/dashboard">Dashboard</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/products">Products</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/orders">Orders</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/analytics">Analystics</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
