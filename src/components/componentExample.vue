<template>
  <div>
      <button @click="showAlert">Click!</button>
  </div>
</template>

<script>
export default {
    data: () => ({
        message: 'Hola desde el componente'
    }),
    
    methods: {
        showAlert(){
            return alert(this.message)
        }
    }
};
</script>
