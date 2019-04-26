<template>
  <div id="zizizujian">
    <h3>这是子子组件</h3>
    <p>{{zizizujian}}</p>
    <!-- 传值 -->
    <span>{{messAge}}</span>
    <!-- 列表数据同步渲染 -->
    <ul>
      <li v-for="(list ,index) in lists" :key="index">{{list.name}}-{{list.price}}</li>
    </ul>
    <button @click="addItem">addItem</button>
    <button @click="sendtMsg">emit</button>
  </div>
</template>
<script>
export default {
  name: "zizizujian",
  props: ["mess-age"],
  data() {
    return {
      zizizujian: "这是子子组件",
      lists: [
        {
          name: "apple",
          price: 20
        },
        {
          name: "banana",
          price: 20
        },
        {
          name: "strawberry",
          price: 20
        }
      ],
      title:"hello world"
    };
  },
  methods: {
    addItem() {
        //push pop 尾部添加 删除   unshift shift 头部添加删除  splice 
      this.lists.unshift({
        name: "aaa",
        price: 100
      });
    },
    sendtMsg:function(){
      this.$emit('getMessage',this.title)
    }
  },
};
</script>
