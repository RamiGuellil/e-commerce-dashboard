<template>
  <div style="margin-bottom: 12px">Orders</div>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            append-inner-icon="mdi-magnify"
            :variant="false"
            bg-color="#f4f4f4"
            density="compact"
            placeholder="Search"
            single-line
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-select
            style="width: 10em"
            placeholder="Status"
            bg-color="#f4f4f4"
            :items="['All', 'Completed', 'Delivering', 'Cancelled']"
            :variant="false"
            density="compact"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-btn class="text-capitalize text-white" prepend-icon="mdi-plus" flat color="#009ef7"
            >Add Order</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-table fixed-header>
            <thead>
              <tr class="text-uppercase" style="color: #b5b5c3">
                <th class="text-left text-h7 font-weight-bold">Order ID</th>
                <th class="text-left text-h7 font-weight-bold">Client</th>
                <th class="text-left text-h7 font-weight-bold">Total</th>
                <th class="text-left text-h7 font-weight-bold">Date</th>
                <th class="text-left text-h7 font-weight-bold">Status</th>
                <th class="text-left text-h7 font-weight-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in orders" :key="item.name">
                <td>#{{ item.id }}</td>
                <td class="font-weight-medium">
                  <v-avatar color="grey-lighten-1" style="margin-right: 5px;">
                    <v-img :src="item.client.photo" cover></v-img>
                  </v-avatar>
                  {{ item.client.name }}
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.date }}</td>
                <td>
                  <v-chip
                    label
                    size="small"
                    :color="item.status === 0 ? '#50cd89' : item.status === 1 ? 'primary' : 'error'"
                  >
                    {{ status[item.status] }}
                  </v-chip>
                </td>
                <td>
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        style="color: #5e6278"
                        class="text-capitalize"
                        color="#f4f4f4"
                        elevation="0"
                        append-icon="mdi-dots-vertical"
                        v-bind="props"
                      >
                        Action
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(el, index) in item.actions"
                        :key="index"
                        :value="el"
                      >
                        <v-list-item-title>{{ el }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import client_103512102022 from "@/assets/client_103512102022.jpg";
import client_111312102022 from "@/assets/client_111312102022.jpg";
import client_113712102022 from "@/assets/client_113712102022.jpg";
import client_114212102022 from "@/assets/client_114212102022.jpg";
import client_114412102022 from "@/assets/client_114412102022.jpg";

export default {
  setup() {
    const status = ['Completed', 'Delivering', 'Cancelled'];
    const orders = [
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (10 - 0) + 0)%2,
        client: {
          name: "Steve E. Lane",
          photo: client_103512102022,
        },
        actions: ["edit", "delete"],
      },
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (1 - 0) + 0),
        client: {
          name: "Martha D. Authement",
          photo: client_111312102022,
        },
        actions: ["edit", "delete"],
      },
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (1 - 0) + 0),
        client: {
          name: "Eric J. Koon",
          photo: client_113712102022,
        },
        actions: ["edit", "delete"],
      },
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (1 - 0) + 0),
        client: {
          name: "Antonio C. Newton",
          photo: client_114412102022,
        },
        actions: ["edit", "delete"],
      },
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (1 - 0) + 0),
        client: {
          name: "Debra C. Dominguez",
          photo: client_114212102022,
        },
        actions: ["edit", "delete"],
      },
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (1 - 0) + 0),
        client: {
          name: "Martha D. Authement",
          photo: client_111312102022,
        },
        actions: ["edit", "delete"],
      },
      {
        id: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (2395 - 1120) + 1120),
        date: new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())).toLocaleDateString(),
        status: Math.floor(Math.random() * (10 - 0) + 0)%2 + Math.floor(Math.random() * (1 - 0) + 0),
        client: {
          name: "Antonio C. Newton",
          photo: client_114412102022,
        },
        actions: ["edit", "delete"],
      },
    ];
    return { orders, status };
  },
};
</script>
