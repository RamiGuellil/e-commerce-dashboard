<template>
  <div>Products</div>
  <v-card flat style="margin-top: 12px">
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            density="compact"
            :variant="false"
            bg-color="#f4f4f4"
            label="Search products"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col align-self="center" cols="auto">
          <v-menu :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-btn
                style="color: #5e6278"
                class="text-capitalize"
                color="#f4f4f4"
                elevation="0"
                prepend-icon="mdi-filter"
                v-bind="props"
              >
                Filters
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title class="font-weight-medium text-medium-emphasis">Status</v-list-item-title>
                <v-row>
                  <v-col>
                    <v-select single-line placeholder="Select Status" color="primary" density="compact" :variant="false" bg-color="#f4f4f4" :items="['Active', 'Inactive']"></v-select>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="font-weight-medium text-medium-emphasis">QTY</v-list-item-title>
                <v-row>
                  <v-col>
                    <v-text-field single-line type="number" style="width: 100px" color="primary" :variant="false" bg-color="#f4f4f4" density="compact" placeholder="Min"></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field single-line type="number" style="width: 100px" color="primary" :variant="false" bg-color="#f4f4f4" density="compact" placeholder="Max"></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="font-weight-medium text-medium-emphasis">Price</v-list-item-title>
                <v-row>
                  <v-col>
                    <v-text-field single-line type="number" style="width: 100px" color="primary" :variant="false" bg-color="#f4f4f4" density="compact" placeholder="Min"></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field single-line type="number" style="width: 100px" color="primary" :variant="false" bg-color="#f4f4f4" density="compact" placeholder="Max"></v-text-field>
                  </v-col>
                </v-row>
              </v-list-item>
              <v-list-item>
                <v-btn block flat color="primary" class="text-capitalize">Apply</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col align-self="center" cols="auto">
          <v-btn
            class="text-capitalize text-white"
            color="#009ef7"
            elevation="0"
            prepend-icon="mdi-plus"
          >
            Add Product
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-table fixed-header>
            <thead>
              <tr class="text-uppercase" style="color: #b5b5c3">
                <th class="text-left text-h7 font-weight-bold">Product</th>
                <th class="text-left text-h7 font-weight-bold">Ref.</th>
                <th class="text-left text-h7 font-weight-bold">Qty</th>
                <th class="text-left text-h7 font-weight-bold">Price</th>
                <th class="text-left text-h7 font-weight-bold">Rating</th>
                <th class="text-left text-h7 font-weight-bold">Status</th>
                <th class="text-left text-h7 font-weight-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="item.name">
                <td class="font-weight-medium">{{ item.name + " " + (index + 1) }}</td>
                <td>#{{ item.ref }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <v-rating
                    readonly
                    color="#B5B5C3"
                    active-color="#FFAD0F"
                    size="18"
                    v-model="item.rating"
                  ></v-rating>
                </td>
                <td>
                  <v-chip
                    label
                    size="small"
                    :color="item.status % 2 === 0 ? '#50cd89' : 'error'"
                  >
                    {{ status[item.status % 2] }}
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
export default {
  setup() {
    const status = ["Active", "Inactive"];
    const products = [
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
      {
        name: "Product",
        ref: Math.floor(Math.random() * (5563 - 563) + 563),
        qty: Math.floor(Math.random() * (95 - 0) + 0),
        price: Math.floor(Math.random() * (395 - 120) + 120),
        rating: Math.floor(Math.random() * (5 - 0) + 0),
        status: Math.floor(Math.random() * (10 - 0) + 0),
        actions: ["edit", "delete"],
      },
    ];
    return { products, status };
  },
};
</script>
