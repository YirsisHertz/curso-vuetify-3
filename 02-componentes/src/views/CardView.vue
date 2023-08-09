<template>
  <v-toolbar collapse>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>

  <div>
    <span class="d-block text-center">Props</span>
    <v-card
      text="Mi tarjeta basada en props"
      title="Titulo"
      subtitle="Subtitle"
      variant="outlined"
      elevation="15"
    />

    <span class="d-block text-center">Slots</span>
    <v-card>
      <template v-slot:title> Titulo </template>
      <template v-slot:subtitle> Subtitulo </template>
      <template v-slot:text> Mi tarjeta basada en slots </template>
    </v-card>

    <span class="d-block text-center">Markup</span>
    <v-card>
      <v-card-item>
        <v-card-title>Titulo</v-card-title>
        <v-card-subtitle>Subtitulo</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        dolorum, velit est iste omnis nostrum quam, voluptas ea dolore tenetur
        excepturi, obcaecati non qui officia impedit autem numquam consectetur?
        Deleniti.
      </v-card-text>

      <v-btn block color="blue-lighten-1" rounded="0">Read more...</v-btn>
    </v-card>
  </div>
</template>
