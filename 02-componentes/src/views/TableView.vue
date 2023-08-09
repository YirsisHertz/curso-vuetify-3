<template>
  <v-table fixed-header height="300">
    <thead>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 15" :key="i">
        <td>User</td>
        <td>Lastname</td>
        <td>user@mail.com</td>
      </tr>
    </tbody>
  </v-table>
</template>
