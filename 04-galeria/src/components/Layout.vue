<script lang="ts" setup>
import Navbar from "./Navbar.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item
          nav
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        ></v-list-item>

        <v-divider></v-divider>

        <!-- <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            value="dashboard"
          ></v-list-item>

          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list> -->
      </v-navigation-drawer>

      <v-navigation-drawer permanent>
        <Navbar />
      </v-navigation-drawer>

      <v-main style="height: 300px">
        <v-container>
          <slot></slot>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
