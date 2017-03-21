<template>
  <div>
    Counter is {{ count }}
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
  </div>
</template>

<script>
  import {  mapActions,mapGetters  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
          'count'
      ])
    },
    methods: {
      ...mapActions([
          'decrement',
          'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
