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
              <LineChart :chartData="testData" :options="options" />
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
                <v-card-text>
                  <v-list lines="two">
                    <v-list-item v-for="client in clients" :title="client.name"
        :subtitle="client.address">
                      <template v-slot:prepend>
                        <v-avatar color="grey-lighten-1">
                          <v-img :src="client.photo" cover></v-img>
                        </v-avatar>
                      </template>
                      <v-divider style="margin-top: 1.8em;"></v-divider>
                    </v-list-item>
                  </v-list>
                </v-card-text>
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
import { LineChart } from "vue-chart-3";
//import {client_103512102022, client_111312102022, client_113712102022, client_114212102022, client_114412102022} from "@/assets/";
import client_103512102022 from "@/assets/client_103512102022.jpg";
import client_111312102022 from "@/assets/client_111312102022.jpg";
import client_113712102022 from "@/assets/client_113712102022.jpg";
import client_114212102022 from "@/assets/client_114212102022.jpg";
import client_114412102022 from "@/assets/client_114412102022.jpg";
export default {
  components: {
    LineChart,
  },
  setup() {
    const earned = ref(3350);
    const goalToEarned = ref(5000);
    const testData = {
      labels: ["17 Jan", "20 Jan", "23 Jan", "27 Jan", "30 Jan"],
      datasets: [
        {
          data: [1200, 500, 750, 300, 600, 1500],
          fill: true,
          borderColor: "#2554FF",
          backgroundColor: "rgba(125,150,220,0.5)",
          borderWidth: 1,
          label: "Earning",
          tension: 0.3,
          pointStyle: "circle",
          pointRadius: 5,
          pointHoverRadius: 10,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
          },
          grid: {
            display: true,
            color: "#e2e2e2",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      legend: {
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false,
    };
    const clients = [
      {
        name: "Steve E. Lane",
        phone: "+1 xxx-xxx-xxxx",
        address: "2976 Deer Ridge Drive Summit, NJ 07901",
        photo: client_103512102022,
      },
      {
        name: "Martha D. Authement",
        phone: "+1 xxx-xxx-xxxx",
        address: "297 Tori Lane Salt Lake City, UT 84116",
        photo: client_111312102022,
      },
      {
        name: "Eric J. Koon",
        phone: "+1 xxx-xxx-xxxx",
        address: "2178 Linden Avenue Altamonte Springs, FL 32701",
        photo: client_113712102022,
      },
      {
        name: "Antonio C. Newton",
        phone: "+1 xxx-xxx-xxxx",
        address: "2380 Rainbow Drive Akron, OH 44308",
        photo: client_114412102022,
      },
      {
        name: "Debra C. Dominguez",
        phone: "+1 xxx-xxx-xxxx",
        address: "2336 Drummond Street Morristown, NJ 07960",
        photo: client_114212102022,
      },
    ];
    return { earned, goalToEarned, testData, options, clients };
  },
};
</script>
