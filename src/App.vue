<template>
  <div id="app">
    <div class="title">
      <h1>Sandstone Takeover</h1>
    </div>
    <header>
      <div class="sort-buttons">
        <button @click="sortClick('artist')">Sort Alphabetically</button>&nbsp;&nbsp;&nbsp;
        <button @click="sortClick('start')">Sort Chronologically</button>&nbsp;&nbsp;&nbsp;
        <button>Display Conflicts</button>
      </div>
    </header>
    <ShowsList :shows="shows" :sort="sort" />
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
} from '@vue/composition-api';
import ShowsList from './components/ShowsList.vue';
import Show from './Interfaces/Show';
import SortShow from './types/SortShow';
import data from './assets/data.json';

export default defineComponent({
  name: 'App',
  components: { ShowsList },
  setup() {
    const shows = ref<Show[]>(data);
    const sort = ref<SortShow>('artist');
    const sortClick = (term: SortShow) => {
      sort.value = term;
    };
    return { shows, sort, sortClick };
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
title {
    font-size: 40px;
}
header {
  text-align: center;
}
.sort-buttons {
  margin-top: 20px;
}
button {
  margin-right: 20px;
  color: white;
  border: 0px solid steelblue;
  background: steelblue;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: url('/utilities/cursor.cur'), pointer;
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
