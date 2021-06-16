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
      <h3>{{user.name}}</h3>
      <h3>{{user.nickname}}</h3>
      <h3>Puntos: {{user.score}}</h3>
			<button @click="$emit('updateScore', 10)">Comprar 10 puntos</button>
            <button @click="$emit('updateScore', 20)">Comprar 20 puntos</button>
			<button @click="$emit('updateScore', 30)">Comprar 30 puntos</button>
			<button @click="$emit('updateScore', 40)">Comprar 40 puntos</button>
  </div>
</template>

<script>
export default {
    props: ['user']
};
</script>
