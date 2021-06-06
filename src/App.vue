<template>
  <div id="app">
    <Directives v-show='false' msg="Bienvenidos al curso de Vuejs"/>
    <computed-properties/>
  </div>
</template>

<script>
import Directives from './components/directives.vue'
import ComputedProperties from './components/computedProperties.vue'

export default {
  name: 'App',
  components: {
    Directives,
    ComputedProperties
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
