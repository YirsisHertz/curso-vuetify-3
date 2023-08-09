<script lang="ts" setup>
import { calculatorStore } from "../stores/calculatorStore.ts";

const props = defineProps({
  value: {
    required: true,
    type: [Number, String],
  },
});
</script>

<template>
  <v-col class="text-center my-5" cols="3">
    <v-btn
      @click="calculatorStore.handleAddValue(props.value)"
      rounded
      variant="text"
      size="x-large"
      class="font-weight-bold"
    >
      {{ props.value }}
    </v-btn>
  </v-col>
</template>
