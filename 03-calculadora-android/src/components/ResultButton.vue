<script setup lang="ts">
import { calculatorStore } from "../stores/calculatorStore.ts";
</script>

<template>
  <v-col class="text-center my-5" cols="6">
    <v-btn
      @click="calculatorStore.handleResult()"
      color="orange-accent-4"
      variant="flat"
      rounded
      size="x-large"
      class="font-weight-bold w-100"
    >
      <slot></slot>
    </v-btn>
  </v-col>
</template>
