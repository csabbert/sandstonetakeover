<template>
  <div class="shows-list">
    <transition-group name="list" tag="ul">
      <li v-for="show in sortedShows" :key="show.artist">
        <h2>Artist: {{show.artist}}</h2>
        <div class="start-time">
          <p>Start Time: {{show.start}}</p>
        </div>
        <div class="end-time">
          <p>End Time: {{show.end}}</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
} from '@vue/composition-api';
import Show from '../Interfaces/Show';
import SortShow from '../types/SortShow';

export default defineComponent({
  props: {
    shows: {
      required: true,
      type: Array as PropType<Show[]>,
    },
    sort: {
      required: true,
      type: String as PropType<SortShow>,
    },
  },
  setup(props) {
    const sortedShows = computed(
      () => [...props.shows].sort((a: Show, b: Show) => (
        a[props.sort] > b[props.sort] ? 1 : -1)),
    );
    return { sortedShows };
  },
});
</script>

<style scoped>
  .shows-list {
    max-width: 600px;
    margin: 20px auto;
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
    text-align: left;
    font-size: large;
    margin: 0 10px 10px;
    text-transform: capitalize;
  }
  .start-time {
    text-align: left;
    font-size: large;
    margin: 5px 30px;
  }
  .end-time {
    text-align: left;
    font-size: large;
    margin: 0 30px;
  }
  .list-move {
    transition: all 0.5s;
  }
</style>
