<template>
  <div :class="{dark: darkMode}">
    <h1 :class="{lightText: darkMode}">Enlaces de clases y estilos</h1>
    <button v-if="!darkMode" @click="darkMode = !darkMode">Cambiar a modo nocturno</button>
    <button v-else @click="darkMode = !darkMode">Cambiar a modo día</button>

    <h1 :class="[h1Rosa, cursiva]">h1 rosa</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    darkMode: false,
    nightShift: false,
    h1Rosa: 'pink',
    cursiva: 'cursive'
  })
};
</script>

<style lang="css" scoped>
.lightText{
  color: white;
}
.dark{
  min-height: 90vh;
  background-color: rgb(18, 29, 39);
}

.pink{
  color: palevioletred;
}

.cursive{
  font-family: cursive;
}

</style>