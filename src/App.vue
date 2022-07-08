<template>
  <div id="app">
    <div class="title">
      <h1>Sandstone Takeover</h1>
    </div>
    <header>
      <div class="sort">
        <button @click="sortClick('artist')">Sort Alphabetically</button>&nbsp;
        <button @click="sortClick('start')">Sort Chronologically</button>&nbsp;
        <button>Show Conflicts</button>
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
// import Vue from 'vue';
import ShowsList from './components/ShowsList.vue';
import Show from './types/Show';
import SortTime from './types/SortTime';
import data from './assets/data.json';

export default defineComponent({
  name: 'App',
  components: { ShowsList },
  setup() {
    const shows = ref<Show[]>(data);
    const sort = ref<SortTime>('start');
    const sortClick = (term:SortTime) => {
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
