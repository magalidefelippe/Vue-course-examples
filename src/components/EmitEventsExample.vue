<template>
  <div>
      <h3>{{user.name}}</h3>
      <h3>{{user.nickname}}</h3>
      <h3>Puntos: {{user.score}}</h3>
      <button @click="$emit('updateScore')">Comprar 20 puntos</button>
  </div>
</template>

<script>
export default {
    props: ['user']
};
</script>
