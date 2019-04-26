<template>
  <div>
    <!-- <keep-alive>是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。
    <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似-->
    <keep-alive>
      <p :is="whichcomp"></p>
    </keep-alive>
    <button @click="choosecomp('a')">acomp</button>
    <button @click="choosecomp('b')">bcomp</button>
    <button @click="choosecomp('c')">ccomp</button>
  </div>
</template>
<script>
import acomp from "./a";
import bcomp from "./b";
import ccomp from "./c";
export default {
  name: "about",
  data() {
    return {
      whichcomp: "acomp"
    };
  },
  components: { acomp, bcomp, ccomp },
  methods: {
    choosecomp(x) {
      this.whichcomp = x + "comp";
    }
  }
};
</script>
