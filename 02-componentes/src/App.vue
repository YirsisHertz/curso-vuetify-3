<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>

  <div class="w-75 mx-auto pa-10 bg-indigo mt-16">
    <RouterView />
  </div>
</template>
