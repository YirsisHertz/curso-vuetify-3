<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <RouterLink
    active-class="text-cyan text-decoration-underline"
    class="text-black text-decoration-none"
    :to="props.to"
  >
    <v-list-item :title="props.title" :value="props.title.toLowerCase()" />
  </RouterLink>
</template>
