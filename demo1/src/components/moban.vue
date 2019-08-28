<template>
  <div>
    <h3>这是模板</h3>
    <p>{{message}}</p>
    <!-- 采用ref传值 -->
    <zujianqiantao ref="msg"></zujianqiantao>
  </div>
</template>
<script>
import zujianqiantao from "./zujianqiantao";
export default {
  name: "moban",
  data() {
    return {
      message: "模板",
    };
  },
  components: { zujianqiantao },
  mounted() {
    console.log(this.$refs.msg);
    this.$refs.msg.getMsg("我是子组件abc");
  },
};
</script>

