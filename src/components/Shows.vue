<template>
  <div class="Shows">
    Sandstone Takeover

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
});
</script>

<style lang="sass" scoped>
.Shows
  font-size: 40px
</style>
