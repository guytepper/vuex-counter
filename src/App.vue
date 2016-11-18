<template>
  <counter></counter>
</template>

<script>
import Counter from './Counter.vue';

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
</style>
