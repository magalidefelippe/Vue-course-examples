<template>
  <div>
    <!-- 
      v-text 
    -->
    <h1>Directiva v-text</h1>
    <h3>{{ msg }}</h3>
    <h3 v-text="msg"></h3>

    <!-- 
      v-html
    -->
    <h1>Directiva v-html</h1>
    <p v-html="vhtmlExample"></p>

    <!-- 
      v-show
    -->
    <h1>Directiva v-show</h1>
    <h3 v-show="firstPermission">Este elemento se mostrará si tengo permiso</h3>
    <h3 v-show="secondPermission">
      Este elemento se mostrará si tengo permiso
    </h3>

    <!-- 
      v-if, v-else, v-else-if
    -->
    <h1>Directivas v-if, v-else y v-else-if</h1>
    <h3 v-if="login & admin">
      Esto se mostrará si el usuario se loguea y es administrador
    </h3>
    <h3 v-else-if="login">
      Esto se mostrará si el usuario se loguea pero no es administrador
    </h3>
    <h3 v-else>Esto se mostrará si no se identifica</h3>

    <!--
    v-for
    -->
    <h1>Directiva v-for</h1>
    <h3 v-for="item in items" :key="item.id">
      {{ item.message }}
    </h3>

    <h3 v-for="value in personObject" :key="value">
      {{ value }}
    </h3>

    <!--
        Con v-if
      -->
    <div v-if="login">
      <h3 v-for="value in personObject" :key="value">
        {{ value }}
      </h3>
    </div>

    <!--
      V-ON
    -->
    <h1>Directiva v-on</h1>
    <button @click="vOnEvent">click</button>
    <h1>v-on con modificador</h1>
    <button @click.once="vOnEvent">Solo una vez</button>

    <!--
      V-BIND
    -->
    <h1>Directiva v-bind</h1>
    <br />
    <img
      src="https://pbs.twimg.com/media/EWPJiRLU8AIbuyb.jpg"
      alt="imagen de bob esponja"
    />
    <img v-bind:src="urlImage" alt="imagen de bob esponja" />
    <img :src="urlImage" alt="imagen de bob esponja" />
    <img :src="urlImage" :[key]="text" />
    <img v-bind="image" alt="imagen de bob esponja" />

    <h1>Directiva v-model</h1>
    <h4>{{userName}}</h4>
    <input v-model="userName">
    <h1>v-model en un textarea y con modificador</h1>
    <textarea v-model.lazy="userName"/>
    <h1>v-model en un select</h1>
    <h4>El item seleccionado es: {{itemSelected}}</h4>
    <select v-model="itemSelected">
      <option value="A">Product A</option>
      <option value="B">Product B</option>
      <option value="C">Product C</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    msg: "Bienvenido al curso de Vuejs",
    vhtmlExample: "<h3>Este elemento será un h3</h3>",
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

    urlImage: "https://pbs.twimg.com/media/EWPJiRLU8AIbuyb.jpg",
    key: "alt",
    text: "Imagen de bob esponja",
    image: {
      src: "https://pbs.twimg.com/media/EWPJiRLU8AIbuyb.jpg",
      alt: "imagen de bob esponja",
    },

    userName: '',
    itemSelected: ''
  }),

  methods: {
    vOnEvent() {
      alert("Usando v-on");
    },
  },
};
</script>

