<template>
  <v-expansion-panels variant="popout">
    <v-expansion-panel
      v-for="i in 5"
      :key="i"
      title="Item"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      expand-icon="mdi-arch"
      collapse-icon="mdi-android"
    />
  </v-expansion-panels>
</template>
