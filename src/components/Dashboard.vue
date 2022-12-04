<template>
  <div>
    <div style="margin-bottom: 10px">Dashboard</div>
    <v-layout>
      <v-row>
        <v-col lg="7" md="7" xl="7" xs="12" sm="12">
          <v-card flat>
            <v-card-title> Sales this mounths </v-card-title>
            <v-card-subtitle>Earning from all clients</v-card-subtitle>
            <v-card-text>
              <div>
                <span style="vertical-align: super; color: #b5b5c3; padding: 4px">$</span>
                <span style="font-size: 2em; color: #3f4254; font-weight: 500">{{
                  earned
                }}</span>
              </div>
              <div
                style="font-size: 1.075em; color: #b5b5c3; font-weight: 500; padding: 4px"
              >
                Another {{ goalToEarned - earned }} to Goal
              </div>
              <v-sparkline
                fill
                :gradient="gradient"
                line-width="2"
                padding="8"
                smooth="10"
                :value="value"
                auto-draw
              ></v-sparkline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="5" md="5" xl="5" xs="12" sm="12">
          <v-row>
            <v-col>
              <v-card flat>
                <v-card-title>Earning</v-card-title>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card flat>
                <v-card-title>Top Clients</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const earned = ref(2000);
    const goalToEarned = ref(5000);
    const value= [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0];
    const gradient = ['#42b3f4'];
    return { earned, goalToEarned, value, gradient };
  },
};
</script>
