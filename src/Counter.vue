<template>
  <div class="counter">
    Count: {{ count }}
    <div class="buttons">
      <button type="button" @click="increment()">+</button>
      <button type="button" @click="decrement()">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment: function() {this.count++},
    decrement: function() {this.count--},
  }
}
</script>

<style lang="css">
</style>
