<template>
  <div id="app">
    <Shows />
    <Buttons />
    <ShowsList :shows="shows" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
} from '@vue/composition-api';
import Shows from './components/Shows.vue';
import ShowsList from './components/ShowsList.vue';
import Show from './types/Show';
import Buttons from './components/Buttons.vue';

import data from './assets/data.json';

export default Vue.extend({
  name: 'App',
  components: {
    Shows,
    Buttons,
    ShowsList,
  },
  setup() {
    const shows = ref<Show[]>(data);
    // const shows = data;
    return { shows };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
