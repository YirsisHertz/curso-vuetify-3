<script setup lang="ts">
import { ref } from "vue";

import NavbarItem from "../components/NavbarItem.vue";

const drawer = ref(false);
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item title="Menu" />

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <NavbarItem to="/" title="Home" />
        <NavbarItem to="/buttons" title="Buttons" />
        <NavbarItem to="/cards" title="Cards" />
        <NavbarItem to="/dialogs" title="Dialogs" />
        <NavbarItem to="/expansion-panels" title="Expansion Panels" />
        <NavbarItem to="/lists" title="Lists" />
        <NavbarItem to="/tables" title="Tables" />
        <NavbarItem to="/progress" title="Progress" />
        <NavbarItem to="/snackbars" title="Snackbars" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-app-bar color="teal" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Components App</v-app-bar-title>
      </v-app-bar>
    </v-main>
  </v-layout>
</template>
