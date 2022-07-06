<template>
  <div class="Shows">
    Shows

    <!-- <div v-for="item in data" :key="item">
      <p>{{item.artist}}</p>
      <p>{{item.start}}</p>
      <p>{{item.end}}</p>
    </div> -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
// import data from '../assets/data.json';

export default defineComponent({
  name: 'Shows',
  props: {
    msg: String,
  },
  /* data() {
    return {
      data,
    };
  }, */
});
</script>

<style lang="sass" scoped>
.Shows
  font-size: 30px
</style>
