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
          'increment'
      ]),
      ...mapActions([
          'decrement'
      ])
    },
//    computed: mapState([
//        'count'
//    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
