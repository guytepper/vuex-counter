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
  computed: {
    count () {
	    return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>
