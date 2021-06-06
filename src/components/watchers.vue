<template>
  <div>
    <h1>Watchers</h1>
    <h4>{{count}}</h4>
    <button @click="add" style="margin-right: 20px">+</button>
    <button @click="sub">-</button>
    <h4>Valor actual: {{actualNumber}}</h4>
    <h4>Valor anterior: {{beforeNumber}}</h4>
  </div>
</template>

<script>
export default {
    data: () => ({
        actualNumber: 0,
        beforeNumber: null,
        count: 0
    }),

    methods: {
        add(){
            this.count++
        },
        sub(){
            this.count--
        }
    },

    watch: {
        count: function(newValue, oldValue){
            this.actualNumber = newValue;
            this.beforeNumber = oldValue;
        }
    }
};
</script>

