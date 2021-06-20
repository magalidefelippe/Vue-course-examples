<template>
  <div>
    <h1>Bienvenido {{name}}</h1>
    <h1>Usuario: {{nickname}}</h1>

  </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
        nickname: ''
    }),
    mounted(){
        this.name = this.$route.params.userName;
        this.nickname = this.$route.params.userNickname;

    }
};
</script>
