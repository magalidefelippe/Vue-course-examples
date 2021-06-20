<template>
  <div>
    <div v-show="false">
      <h1>Desde home</h1>
      <router-link to="/user">Ir a mi perfil</router-link>
      <button @click="$router.push({ path: '/user' })">Ir a mi perfil</button>
    </div>

    <div>
        <h1>Registro de usuario</h1>
        <p>Nombre</p>
        <input v-model="name"/>
        <p>Nombre de usuario</p>
        <input v-model="nickname"/>
        <br>
        <button @click="loginUser">Registrarme</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nickname: "",
    name: "",
  }),

  methods: {
    loginUser() {
      this.$router.push({
        name: "User",
        params: { userName: this.name, userNickname: this.nickname },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>