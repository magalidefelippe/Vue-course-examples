<template>
  <div>
      <!-- Case 1 example -->
      <button @click="counter++">click</button>
      <h5>{{ counter }}</h5>
  </div>
</template>

<script>
export default {

    props: ['counter']
};
</script>
