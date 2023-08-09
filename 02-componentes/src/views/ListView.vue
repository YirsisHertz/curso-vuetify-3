<template>
  <v-card>
    <v-list>
      <v-list-subheader title="Group #1" />
      <v-list-item
        v-for="i in 5"
        :key="i"
        :title="'Item ' + i"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
      <v-list-subheader title="Group #2" />
      <v-list-item
        v-for="i in 5"
        :key="i"
        :title="'Item ' + i"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    </v-list>
  </v-card>
</template>
