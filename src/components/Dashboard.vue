<template>
  <div>
    <div style="margin-bottom: 10px">Dashboard</div>
    <div>
      <v-row>
        <v-col lg="3" md="4" xl="3" xs="6" sm="6">
          <v-card flat>
            <v-card-title>
              <div>
                <v-avatar size="small" color="rgba(24,103,192,0.3)"
                  ><v-icon color="primary" size="x-small">mdi-tag</v-icon></v-avatar
                >
                Products
              </div>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <span
                    style="margin-right: 5px; font-size: 2.2em"
                    class="font-weight-medium justify-center"
                  >
                    3000
                  </span>
                  <v-chip color="#50cd89" class="ml-0 mr-2" label small>
                    <v-icon>mdi-arrow-up</v-icon>
                    <span>2.2%</span>
                  </v-chip>
                </v-row>
                <v-row style="margin-top: 1.2em; font-size: 1em" class="text-disabled"
                  >Products in stock</v-row
                >
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3" md="4" xl="3" xs="6" sm="6">
          <v-card flat>
            <v-card-title>
              <div>
                <v-avatar size="small" color="rgba(249,133,48,0.3)"
                  ><v-icon color="#f98530" size="x-small">mdi-note</v-icon></v-avatar
                >
                Order
              </div>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <span
                    style="margin-right: 5px; font-size: 2.2em"
                    class="font-weight-medium justify-center"
                  >
                    204
                  </span>
                  <v-chip color="error" class="ml-0 mr-2" label small>
                    <v-icon>mdi-arrow-down</v-icon>
                    <span>2.2%</span>
                  </v-chip>
                </v-row>
                <v-row style="margin-top: 1.2em; font-size: 1em" class="text-disabled"
                  >Delivered Orders</v-row
                >
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3" md="4" xl="3" xs="6" sm="6">
          <v-card flat>
            <v-card-title>
              <div>
                <v-avatar size="small" color="rgba(24,209,101,0.3)"
                  ><v-icon color="#18d165" size="x-small">mdi-account</v-icon></v-avatar
                >
                Customers
              </div>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <span
                    style="margin-right: 5px; font-size: 2.2em"
                    class="font-weight-medium justify-center"
                  >
                    120
                  </span>
                  <v-chip color="error" class="ml-0 mr-2" label small>
                    <v-icon>mdi-arrow-down</v-icon>
                    <span>1.3%</span>
                  </v-chip>
                </v-row>
                <v-row style="margin-top: 1.2em; font-size: 1em" class="text-disabled"
                  >New clients that you got</v-row
                >
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3" md="4" xl="3" xs="6" sm="6">
          <v-card flat>
            <v-card-title>
              <div>
                <v-avatar size="small" color="rgba(176,0,32,0.3)"
                  ><v-icon color="error" size="x-small">mdi-truck</v-icon></v-avatar
                >
                Providers
              </div>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <span
                    style="margin-right: 5px; font-size: 2.2em"
                    class="font-weight-medium justify-center"
                  >
                    200
                  </span>
                  <v-chip color="#50cd89" class="ml-0 mr-2" label small>
                    <v-icon>mdi-arrow-up</v-icon>
                    <span>2.2%</span>
                  </v-chip>
                </v-row>
                <v-row style="margin-top: 1.2em; font-size: 1em" class="text-disabled"
                  >New providers</v-row
                >
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
                <v-card-text>
                  <BarChart :chartData="barChartData" :options="options" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card flat>
                <v-card-title>Top Clients</v-card-title>
                <v-card-text>
                  <v-list lines="two">
                    <v-list-item
                      v-for="client in clients"
                      :title="client.name"
                      :subtitle="client.address"
                    >
                      <template v-slot:prepend>
                        <v-avatar color="grey-lighten-1">
                          <v-img :src="client.photo" cover></v-img>
                        </v-avatar>
                      </template>
                      <v-divider style="margin-top: 1.8em"></v-divider>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { LineChart } from "vue-chart-3";
import { BarChart } from "vue-chart-3";
//import {client_103512102022, client_111312102022, client_113712102022, client_114212102022, client_114412102022} from "@/assets/";
import client_103512102022 from "@/assets/client_103512102022.jpg";
import client_111312102022 from "@/assets/client_111312102022.jpg";
import client_113712102022 from "@/assets/client_113712102022.jpg";
import client_114212102022 from "@/assets/client_114212102022.jpg";
import client_114412102022 from "@/assets/client_114412102022.jpg";
export default {
  components: {
    LineChart,
    BarChart,
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

    const barChartData = {
      labels: ["17 Jan", "20 Jan", "23 Jan", "27 Jan", "30 Jan"],
      datasets: [
        {
          label: "Bar Chart",
          data: [1650, 1590, 1800, 1810, 1560, 1550, 1400],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return { earned, goalToEarned, testData, options, clients, barChartData };
  },
};
</script>
