<template>
  <div style="margin-bottom: 12px">Analystics</div>
  <v-row>
    <v-col xs="12" sm="12" lg="6" xl="6" md="6">
      <v-row>
        <v-col>
          <v-sheet
            class="mx-auto transition-swing secondary rounded-xl pa-6"
            elevation="7"
          >
            <v-row>
              <v-col cols="10">
                <div style="padding-bottom: 12px" class="text-medium-emphasis">Fund</div>
                <div style="padding-bottom: 1.2em" class="font-weight-medium text-h3">
                  $ 52,235
                </div>
              </v-col>
              <v-col cols="2" class="d-none d-sm-flex">
                <v-avatar size="x-large" color="#ffe8cc">
                  <v-icon color="warning" size="x-large">mdi-treasure-chest</v-icon>
                </v-avatar>
              </v-col>
            </v-row>
            <div style="padding-bottom: 7px" class="text-medium-emphasis text-h6">
              Avalaible balance in your chest
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row style="margin-top: 1em">
        <v-col>
          <v-card flat class="pb-5">
            <v-card-title></v-card-title>
            <v-card-subtitle>Close to get your target</v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto" class="font-weight-medium">
                  <span> $ {{ progress }} </span>
                  /
                  <span class="text-medium-emphasis">{{ target }}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-progress-linear
                    height="8"
                    :model-value="progress"
                    :max="target"
                    :buffer-value="target"
                    color="primary"
                    rounded
                    rounded-bar
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card color="green-lighten-3" variant="outlined">
                    <v-card-text>
                      <v-row>
                        <v-col align-self="center">
                          <v-icon size="48" color="green-accent-4"
                            >mdi-chart-line-variant</v-icon
                          >
                        </v-col>
                        <v-col>
                          <div class="text-medium-emphasis">Income</div>
                          <div class="font-weight-medium text-h6 text-high-emphasis">
                            $ 78000
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card color="red-lighten-3" variant="outlined">
                    <v-card-text>
                      <v-row>
                        <v-col align-self="center">
                          <v-icon size="48" color="red-lighten-1"
                            >mdi-chart-line-variant</v-icon
                          >
                        </v-col>
                        <v-col>
                          <div class="text-medium-emphasis">Spending</div>
                          <div class="font-weight-medium text-h6 text-high-emphasis">
                            $ 78000
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="mt-6">
                <v-col>
                  <v-row>
                    <v-col class="font-weight-medium">Lastest Orders</v-col>
                    <v-col cols="auto"
                      ><router-link to="#" class="text-decoration-none text-grey">
                        View all</router-link
                      >
                    </v-col>
                  </v-row>
                  <v-divider color="grey-lighten-3" class="mt-4"></v-divider>
                  <v-list>
                    <v-list-item v-for="item in orders">
                      <v-row>
                        <v-col align-self="center" cols="auto" class="d-none d-sm-flex">
                          <v-chip label color="green-accent-4">
                            <v-icon>mdi-cash-multiple</v-icon>
                          </v-chip>
                        </v-col>
                        <v-col align-self="center">
                          <div class="font-weight-medium">Order {{ item.id }}</div>
                          <div class="text-disabled">{{ item.date }}</div>
                        </v-col>
                        <v-col cols="auto" align-self="center">
                          <v-chip class="text-red mr-4" color="transparent"
                            >{{ item.total }} $</v-chip
                          >
                          <v-btn variant="plain">
                            <v-icon size="large">mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col xs="12" sm="12" lg="6" xl="6" md="6">
      <v-card flat style="overflow: auto">
        <v-card-text class="mt-2">
          <v-row>
            <v-col>
              <div class="font-weight-medium">Best selling products</div>
              <v-divider class="mt-4"></v-divider>
              <DoughnutChart :chartData="data" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="font-weight-medium">Active clients</div>
              <v-divider class="mt-4"></v-divider>
              <div class="mt-4" style="position: relative; height: 4em">
                <v-avatar
                  v-for="(client, index) in clients"
                  color="grey-lighten-1"
                  class="avatar_overlapping"
                  :style="[index != 0 ? { left: index * 24 + 'px' } : {}]"
                >
                  <v-img :src="client.photo" cover></v-img>
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { DoughnutChart } from "vue-chart-3";
import client_103512102022 from "@/assets/client_103512102022.jpg";
import client_111312102022 from "@/assets/client_111312102022.jpg";
import client_113712102022 from "@/assets/client_113712102022.jpg";
import client_114212102022 from "@/assets/client_114212102022.jpg";
import client_114412102022 from "@/assets/client_114412102022.jpg";
export default {
  components: {
    DoughnutChart,
  },
  setup() {
    const target = 3000;
    const progress = 1922;
    const orders = [
      {
        id: "#" + Math.floor(Math.random() * (5563 - 563) + 563),
        date: new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())
        ).toLocaleDateString(),
        total: Math.floor(Math.random() * (5563 - 1563) + 1563),
      },
      {
        id: "#" + Math.floor(Math.random() * (5563 - 563) + 563),
        date: new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())
        ).toLocaleDateString(),
        total: Math.floor(Math.random() * (5563 - 1563) + 1563),
      },
      {
        id: "#" + Math.floor(Math.random() * (5563 - 563) + 563),
        date: new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())
        ).toLocaleDateString(),
        total: Math.floor(Math.random() * (5563 - 1563) + 1563),
      },
      {
        id: "#" + Math.floor(Math.random() * (5563 - 563) + 563),
        date: new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())
        ).toLocaleDateString(),
        total: Math.floor(Math.random() * (5563 - 1563) + 1563),
      },
    ];
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
    const data = {
      labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6"],
      datasets: [
        {
          label: "Best selling products",
          data: [
            Math.floor(Math.random() * (395 - 120) + 120),
            Math.floor(Math.random() * (395 - 120) + 120),
            Math.floor(Math.random() * (395 - 120) + 120),
            Math.floor(Math.random() * (395 - 120) + 120),
            Math.floor(Math.random() * (395 - 120) + 120),
            Math.floor(Math.random() * (395 - 120) + 120),
          ],
          backgroundColor: [
            "rgb(244, 122, 31)",
            "rgb(253, 187, 47)",
            "rgb(0, 124, 195)",
            "rgb(55, 123, 43)",
            "rgb(122, 193, 66)",
            "rgb(0, 82, 155)"
          ],
          hoverOffset: 4,
        },
      ],
    };
    return { target, progress, orders, clients, data };
  },
};
</script>
<style scoped>
.avatar_overlapping {
  border: 2px solid white;
  position: absolute;
}
</style>
