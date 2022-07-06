<template>
  <div class="shows-list">
    <ul>
      <li v-for="show in shows" :key="show.artist">
        <h2>Artist: {{show.artist}}</h2>
        <div class="show-time">
          <p>Start Time: {{show.start}}</p>
          <p>End Time: {{show.end}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api';
import Show from '../types/Show';

export default defineComponent({
  props: {
    shows: {
      required: true,
      type: Array as PropType<Show[]>,
    },
  },
});
</script>

<style scoped>
  .shows-list {
    max-width: 960px;
    margin: 40px auto;
  }
  .shows-list ul {
    padding: 0;
  }
  .shows-list li {
    list-style-type: none;
    background: white;
    border: 3px solid steelblue;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .shows-list h2 {
    font-weight: bold;
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .show-time {
    display: flex;
  }
  .show-time p {
    margin: 10px 50px;
  }
</style>
