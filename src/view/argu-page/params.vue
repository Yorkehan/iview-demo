<template>
  <vue-friendly-iframe :src=url></vue-friendly-iframe>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['url'],
  name: 'params',
  methods: {
    ...mapMutations([
      'closeTag'
    ])
  }
}
</script>

<style>
  .vue-friendly-iframe{

    height: 100%;
  }
  .vue-friendly-iframe iframe {
    border:0;
    width :100%;
    height: 100%;

  }
</style>
