<script lang="ts" setup>
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
  <v-list-item
    :title="props.title"
    :value="props.title.toLowerCase()"
    active-class="bg-grey-lighten-5"
    :to="props.to"
    link
  ></v-list-item>
</template>
