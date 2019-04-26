<template>
  <div id="zujianqiantao">
    <h3>{{msg}}</h3>
    <p>{{zujianqiantao}}</p>
    <!-- 组件传值 -->
    <!-- message采用的是props的静态传值方式 -->
    <!-- @getMseeage="getMsg"采用的是emit通信（主要用于子组件向父组件传值）
        同时也是自定义事件的调用方式
     -->
    <zizizujian mess-age="hello world" @getMessage="showMsg"></zizizujian>
    <p :style="{color:red}">{{title}}</p>
    <!-- :message1="dongtaichuanzhi
      实现的是props的动态传值
     -->
    <input type="text" v-model="dongtaichuanzhi">
    <form1 :message1="dongtaichuanzhi"></form1>
    <ul>
      <li v-bind:key="index" v-for="(item,index) in furitObj">{{index}}:{{item}}</li>
    </ul>

    <a v-bind:href="link">百度一下</a>
    <br>
    <!-- 元素显示或者隐藏的方式：v-if  v-show -->
    <a v-if="isPartA">partA</a>
    <a v-else>partB</a>
    <!-- <a v-show="isPartA">partA</a> -->

    <button @click="toggle">toggle</button>
  </div>
</template>
<script>
import zizizujian from "./zizizujian";
import form1 from "./form";
export default {
  name: "zujianqiantao",
  data() {
    return {
      zujianqiantao: "组件嵌套",
      dongtaichuanzhi: "",
      furitObj: {
        name: "apple",
        price: "10",
        fiels: "chongqing"
      },
      msg:'',
      title:"",
      link: "https://www.baidu.com/",
      isPartA: true,
      red:'red'
    };
  },

  components: { zizizujian, form1 },
  methods: {
    toggle() {
      this.isPartA = !this.isPartA;
    },
    
    getMsg(data){
      console.log(data);
      this.msg=data;
    },
    showMsg(data){
      console.log(data);
      this.title=data;
    }
  },
  
};
</script>
