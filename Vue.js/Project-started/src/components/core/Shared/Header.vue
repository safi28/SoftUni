<template>
  <div id="app">
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      absolute
      dark
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <router-link :to="{ name: 'profile' }">
            <v-list-item-avatar>
              <img src="../../../assets/slogo.png" />
            </v-list-item-avatar>
          </router-link>

          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <router-link :to="{ name: 'Meistask' }">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Tasks
              <router-link to="/meistask"></router-link>
            </v-list-item-title>

            <v-list-item-icon></v-list-item-icon>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'Create'}">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{icons.svgPath}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create</v-list-item-title>

            <v-list-item-icon></v-list-item-icon>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'Food'}">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-food-apple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Food</v-list-item-title>

            <v-list-item-icon></v-list-item-icon>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'Health'}">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-help-box</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Health questions</v-list-item-title>

            <v-list-item-icon></v-list-item-icon>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'Bmi'}">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>
               mdi-calculator-variant
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>BMI Calculator</v-list-item-title>

            <v-list-item-icon></v-list-item-icon>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import { mdiFolderPlus,  } from "@mdi/js";
export default {
  vuetify: new Vuetify(),
  name: "Header",
  data() {
    return {
      drawer: true,
      color: "primary",
      right: false,
      miniVariant: true,
      expandOnHover: true,
      background: true,
      tab: null,
      icons: {
        svgPath: mdiFolderPlus
      }
    };
  }
};
</script>

<style scoped>
</style>