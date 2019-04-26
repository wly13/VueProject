<template>
    <div>
        <p>这是购物车</p>
        <p>水果总价为:{{totalPrice}}</p>
        <apple></apple>
        <banana></banana>
    </div>
</template>
<script>
import apple from './apple';
import banana from './banana';
export default {
    name:'shopping',
    components:{
        apple,banana
    },
    computed:{//计算机属性
        totalPrice(){
            return this.$store.state.totalPrice
        }
    }
}
</script>
