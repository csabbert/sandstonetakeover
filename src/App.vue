<template>
  <div id="app">
    <Shows />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Shows from '@/components/Shows.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Shows,
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
