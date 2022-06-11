<template>
  <div class="Shows">
    Shows
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Shows',
  props: {
    msg: String,
  },
});
</script>

<style lang="sass" scoped>
.Shows
  font-size: 30px
</style>
