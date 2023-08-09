<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <v-dialog persistent v-model="dialog" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-btn color="cyan" v-bind="props">Open Dialog</v-btn>
    </template>

    <v-card>
      <v-card-title>My Dialog</v-card-title>

      <v-card-text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officia blanditiis temporibus, repellat perspiciatis odit assumenda
          modi ad non nisi rerum earum, similique quam vitae perferendis
          doloribus, quidem ipsum tempore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officia blanditiis temporibus, repellat perspiciatis odit assumenda
          modi ad non nisi rerum earum, similique quam vitae perferendis
          doloribus, quidem ipsum tempore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officia blanditiis temporibus, repellat perspiciatis odit assumenda
          modi ad non nisi rerum earum, similique quam vitae perferendis
          doloribus, quidem ipsum tempore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officia blanditiis temporibus, repellat perspiciatis odit assumenda
          modi ad non nisi rerum earum, similique quam vitae perferendis
          doloribus, quidem ipsum tempore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officia blanditiis temporibus, repellat perspiciatis odit assumenda
          modi ad non nisi rerum earum, similique quam vitae perferendis
          doloribus, quidem ipsum tempore.
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" @click="dialog = false" block>Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
