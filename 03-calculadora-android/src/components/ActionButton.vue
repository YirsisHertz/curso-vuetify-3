<script lang="ts" setup>
import { calculatorStore } from "../stores/calculatorStore.ts";

const props = defineProps(["action"]);

const action = () => {
  if (props.action === "clear") return calculatorStore.handleClear();

  if (props.action === "remove") return calculatorStore.handleRemove();

  if (props.action === "percent") return calculatorStore.handlePercent();

  if (props.action === "divide") return calculatorStore.handleAddOperator("/");

  if (props.action === "multiply")
    return calculatorStore.handleAddOperator("*");

  if (props.action === "decrement")
    return calculatorStore.handleAddOperator("-");

  if (props.action === "sum") return calculatorStore.handleAddOperator("+");
};
</script>

<template>
  <v-col class="text-center my-5" cols="3">
    <v-btn
      @click="action()"
      color="orange-accent-4"
      variant="text"
      rounded
      size="x-large"
      class="font-weight-bold"
    >
      <slot></slot>
    </v-btn>
  </v-col>
</template>
