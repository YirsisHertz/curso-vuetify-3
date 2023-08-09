<script setup lang="ts">
import { ref } from "vue";

const snackbar = ref(false);
</script>

<template>
  <v-btn color="red" @click="snackbar = true"> Open Message </v-btn>

  <v-snackbar color="green" rounded="pill" v-model="snackbar" timeout="1000">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam
    nemo voluptas! Maxime velit odio ratione saepe nam quas autem ex
    perspiciatis nemo a distinctio sequi nostrum veritatis, ab molestiae?

    <template v-slot:actions>
      <v-btn color="amber" @click="snackbar = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>
