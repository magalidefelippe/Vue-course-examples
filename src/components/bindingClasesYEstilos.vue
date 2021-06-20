<template>
  <div :class="{dark: darkMode}">
    <h1 :class="{lightText: darkMode}">Enlaces de clases</h1>
    <button v-if="!darkMode" @click="darkMode = !darkMode">Cambiar a modo nocturno</button>
    <button v-else @click="darkMode = !darkMode">Cambiar a modo día</button>

    <h1 :class="[h1Rosa, cursiva]">h1 rosa</h1>

    <div>
      <h1 :style="{color: h1Color, fontSize: fontSize + 'px'}">
        Enlaces de estilos
      </h1>
      <h1 :style="styleObject">Objeto de estilo</h1>

      <h1 :style="[textStyle, backgroundStyle]">sintaxis array</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    darkMode: false,
    nightShift: false,
    h1Rosa: 'pink',
    cursiva: 'cursive',
    h1Color: 'red',
    fontSize: 30,
    styleObject: {
      color: 'blue',
      fontSize: '30px'
    },
    textStyle: {
      color: 'white',
    },
    backgroundStyle: {
      background: 'black'
    }
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