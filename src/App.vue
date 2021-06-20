<template>
  <div id="app">
    <Directives v-show="false" />
    <computed-properties v-show="false" />
    <watchers v-show="false" />
    <component-example v-show="false" />
    <props-example
      v-show="false"
      :noteTitle="noteOneTitle"
      :noteImage="noteOneImage"
      :noteBody="noteOneBody"
    />
    <props-example
      v-show="false"
      :noteTitle="noteTwoTitle"
      :noteImage="noteTwoImage"
      :noteBody="noteTwoBody"
    />
    <props-data-flow-example
      v-show="false"
      :counter="counter"
      :userName="userName"
    />

    <emit-events-example  
      @updateScore="incrementScore" 
      :user="user" 
      v-show="false"/>

    <binding-clases-y-estilos
    />
  </div>
</template>

<script>
import Directives from "./components/directives.vue";
import ComputedProperties from "./components/computedProperties.vue";
import Watchers from "./components/watchers.vue";
import ComponentExample from "./components/componentExample.vue";
import PropsExample from "./components/propsExample.vue";
import PropsDataFlowExample from "./components/propsDataFlowExample.vue";
import EmitEventsExample from "./components/EmitEventsExample.vue";
import BindingClasesYEstilos from "./components/bindingClasesYEstilos.vue";


export default {
  name: "App",
  data: () => ({
    noteOneTitle: "Bomberos salvan un gatito",
    noteOneImage:
      "http://static2.businessinsider.com/image/505b14b56bb3f7f10d000016-609-900/cat-fireman.jpg",
    noteOneBody: "Un bombero salvo un gatito de un incendio en bla bla bla bla",
    noteTwoTitle: "Argentina produce Sputnik V",
    noteTwoImage:
      "https://www.eleconomista.com.mx/__export/1618942852522/sites/eleconomista/img/2021/04/20/vacuna_sputnik_v_reuters_rusia.jpg_1269359182.jpg",
    noteTwoBody: "El primer lote podría entregarse a fines de junio",
    counter: 0,
    userName: "MARCELO",
    user: {
      name: "Matias",
      nickname: "@matikpo",
      score: 20,
    },
  }),

  methods: {
    /*incrementScore(){
      this.user.score = this.user.score + 20
    }
    with paramethers
    */
    incrementScore(amount){
      this.user.score = this.user.score + amount
    }
  },

  components: {
    Directives,
    ComputedProperties,
    Watchers,
    ComponentExample,
    PropsExample,
    PropsDataFlowExample,
    EmitEventsExample,
    BindingClasesYEstilos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
