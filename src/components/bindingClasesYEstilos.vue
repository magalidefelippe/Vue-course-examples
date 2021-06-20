<template>
  <div :class="{dark: darkMode}">
    <h1 :class="{lightText: darkMode}">Enlaces de clases y estilos</h1>
    <button v-if="!darkMode" @click="darkMode = !darkMode">Cambiar a modo nocturno</button>
    <button v-else @click="darkMode = !darkMode">Cambiar a modo día</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    darkMode: false
  })
};
</script>

<style lang="css" scoped>
.lightText{
  color: white;
}
.dark{
  background-color: rgb(18, 29, 39);
}
</style>