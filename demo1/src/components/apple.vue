<template>
  <div>
    <p>这是apple</p>
    <button @click="addOne">加一个</button>
    <button @click="decOne">减一个</button>
  </div>
</template>
<script>
export default {
    name:'apple',
    data(){
        return{
            price:10
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

