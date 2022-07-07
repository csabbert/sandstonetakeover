<template>
  <div id="app">
    <Shows />
    <header>
      <div class="sort">
        <button @click="handleClick('start')">Sort Shows</button>
        &emsp;&emsp;
        <button>Show Conflicts</button>
      </div>
    </header>
    <ShowsList :shows="shows" :sort="sort" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';
import Shows from './components/Shows.vue';
import ShowsList from './components/ShowsList.vue';
import Show from './types/Show';
import SortTime from './types/SortTime';
import data from './assets/data.json';

export default Vue.extend({
  name: 'App',
  components: {
    Shows,
    ShowsList,
  },
  setup() {
    const shows = ref<Show[]>(data);

    const sort = ref<SortTime>('start');

    const handleClick = (term:SortTime) => {
      sort.value = term;
    };

    return { shows, handleClick, sort };
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
header {
  text-align: center;
  margin-top: 30px;
}
header.sort {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: white;
  border: 0px solid steelblue;
  background: steelblue;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: medium;

  transition-duration: 0.2s;
}
button:hover {
  background: #1195c9;
  color: white;
}
button:active {
  background-color: #2c3e50;
  transition-duration: 5ms;
}
</style>
