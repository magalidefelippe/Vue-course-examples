<template>
  <div>
      <button @click="showAlert">CAMBIOP!</button>
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
