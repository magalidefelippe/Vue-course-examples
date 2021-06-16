<template>
  <!-- <div>
      <h3>{{user.name}}</h3>
      <h3>{{user.nickname}}</h3>
      <h3>Puntos: {{user.score}}</h3>
      <button @click="$emit('updateScore')">Comprar 20 puntos</button>
  </div> 
  ------------------------
  Example with parameters 
  -->
  <div>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.nickname }}</h3>
    <h3>Puntos: {{ user.score }}</h3>
    <button
        v-for="score in scores"
        @click="$emit('updateScore', score)"
        :key="score">
        Comprar {{score}} puntos
    </button>
  </div>
</template>

<script>
export default {
  props: ["user"],

  data: () => ({
      scores: [10, 20, 30, 40]
  })
};
</script>
