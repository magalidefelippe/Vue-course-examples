<template>
  <div>
    <h1>Computed properties</h1>
    <h4>Mensaje original: {{originalMessage}}</h4>
    <h4>Mensaje invertido con computed: 
      {{reversedMessage}}
    </h4>
  </div>
</template>

<script>
export default {
  data: () => ({
    originalMessage: 'Hola a todos'
  }),

  computed: {
    reversedMessage: function () {
      return this.originalMessage.split('').reverse().join('');
    }
  }
};
</script>
