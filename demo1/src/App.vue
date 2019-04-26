<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{message}}</p>
    <p>
       <router-link to="/index">首页</router-link>
       <router-link to="/about">关于我们</router-link>
       <router-link to="/shopping">购物</router-link>
    </p>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
      message:"hello world"
    }
  }
};
</script>
