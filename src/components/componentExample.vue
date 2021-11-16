<template>
  <div>
      <button @click="showAlert">CAMBIO!</button>
  </div>
</template>

<script>
export default {
    data: () => ({
        message: 'Hola desde el component'
    }),
    
    methods: {
        showAlert(){
            return alert(this.message)
        }
    }
};
</script>
