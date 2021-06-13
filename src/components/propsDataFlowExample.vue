<template>
  <div>
      <!-- Case 1 example -->
      <button @click="childCounter++">click</button>
      <h5>{{ childCounter }}</h5>
  </div>
</template>

<script>
export default { 
    props: ['counter'],
    data: function () {
        return {
            childCounter: this.counter
        }
    }
};
</script>
