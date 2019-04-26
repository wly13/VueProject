<template>
  <div>
    <p>这是banana</p>
    <button @click="addOne">加一个</button>
    <button @click="decOne">减一个</button>
  </div>
</template>
<script>
export default {
    name:'banana',
    data(){
        return{
            price:30
        }
    },
    methods:{
        addOne(){
            this.$store.commit('increment',this.price);
        },
        decOne(){
            this.$store.commit('decrement',this.price);
        }
    }
}
</script>

