<script lang="ts" setup>
import ActionButton from "./components/ActionButton.vue";
import ValueButton from "./components/ValueButton.vue";
import ResultButton from "./components/ResultButton.vue";

import { calculatorStore } from "./stores/calculatorStore.ts";
</script>

<template>
  <div class="w-50 mx-auto my-10">
    <v-card>
      <v-card-text>
        <div class="d-flex justify-space-between align-baseline">
          <div>
            <img
              src="./assets/logo.svg"
              alt="logo.svg"
              class="bg-indigo-lighten-1 rounded pa-2"
              width="100"
            />
          </div>
          <div>
            <div class="text-h6 text-end text-grey-lighten-1">
              {{ calculatorStore.result }}
            </div>
            <div class="text-h3 text-end">{{ calculatorStore.operation }}</div>
          </div>
        </div>

        <v-divider />

        <v-container>
          <v-row no-gutters>
            <ActionButton action="clear"> AC </ActionButton>
            <ActionButton action="remove">
              <v-icon icon="mdi-backspace-outline"></v-icon>
            </ActionButton>
            <ActionButton action="percent"> &percnt; </ActionButton>
            <ActionButton action="divide"> &divide; </ActionButton>

            <ValueButton :value="7" />
            <ValueButton :value="8" />
            <ValueButton :value="9" />
            <ActionButton action="multiply"> &times; </ActionButton>

            <ValueButton :value="4" />
            <ValueButton :value="5" />
            <ValueButton :value="6" />
            <ActionButton action="decrement"> - </ActionButton>

            <ValueButton :value="1" />
            <ValueButton :value="2" />
            <ValueButton :value="3" />
            <ActionButton action="sum"> + </ActionButton>

            <ValueButton value="." />
            <ValueButton :value="0" />

            <ResultButton> = </ResultButton>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
