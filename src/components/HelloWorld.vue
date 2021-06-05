<template>
  <div>
    <!-- 
      v-text 
    -->
    <h1>{{ msg }}</h1>
    <h1 v-text="msg"></h1>

    <!-- 
      v-html
    -->
    <p v-html="vhtmlExample"></p>

    <!-- 
      v-show
    -->
    <h1 v-show="firstPermission">Este elemento se mostrará si tengo permiso</h1>
    <h1 v-show="secondPermission">
      Este elemento se mostrará si tengo permiso
    </h1>

    <!-- 
      v-if, v-else, v-else-if
    -->
    <h1 v-if="login & admin">
      Esto se mostrará si el usuario se loguea y es administrador
    </h1>
    <h1 v-else-if="login">
      Esto se mostrará si el usuario se loguea pero no es administrador
    </h1>
    <h1 v-else>Esto se mostrará si no se identifica</h1>

    <!--
    v-for
    -->
    <h1 v-for="item in items" :key="item.id">
      {{ item.message }}
    </h1>

    <h1 v-for="value in personObject" :key="value">
      {{ value }}
    </h1>

      <!--
        Con v-if
      -->
      <div v-if="login">
        <h1 v-for="value in personObject" :key="value">
          {{ value }}
        </h1>
      </div>

    <!--
      V-ON
    -->
    <button @click="vOnEvent">
      click
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    msg: "Bienvenido al curso de Vuejs",
    vhtmlExample: "<h1>Este elemento será un h1</h1>",
    firstPermission: false,
    secondPermission: true,
    login: true,
    admin: false,
    items: [
      {
        message: "Mensaje del item 1",
        id: 1,
      },
      {
        message: "Mensaje del item 2",
        id: 2,
      },
      {
        message: "Mensaje del item 3",
        id: 3,
      },
    ],
    personObject: {
      name: "Martin",
      age: 30,
      job: "Maestro",
    },
  }),

  methods: {
    vOnEvent(){
      alert('Usando v-on')
    }
  }
};
</script>

