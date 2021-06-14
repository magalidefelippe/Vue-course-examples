<template>
  <div>
    <!-- Case 1 example -->
    <button @click="childCounter++">click</button>
    <h5>{{ childCounter }}</h5>

    <!-- Case 2 example -->
    <h5>{{normalizeName}}</h5>
  </div>
</template>

<script>
export default {
  props: ["counter", "userName"],
  data: function () {
    return {
      childCounter: this.counter,
    };
  },
  computed: {
    normalizeName: function () {
      return this.userName.toLowerCase();
    },
  },
};
</script>
