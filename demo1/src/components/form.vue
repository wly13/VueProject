<template>
  <div>
    <h3>form组件</h3>
    <form action>
      <p>动态传值为：{{message1}}</p>
      <label for="name">name</label>
      <!-- lazy会让输入的东西不会立即显示出来，当你按了确认后才会输出输入的值 -->
      <input type="text" id="name" v-model.lazy="name" placeholder="请输入姓名">
      <p>name:{{name}}</p>
      <label for="pass">pass</label>
      <input type="password" id="pass" v-model="pass" placeholder="请输入密码">
      <p>pass:{{pass}}</p>
      <!-- number 将输入的值转为number   因为我们输入的都是字符串 -->
      <!-- 你也可以将input的type改为number -->
      <!-- 同时还有trim，主要是去掉首尾两端的空格 -->
      <input type="text" v-model.number="age">
      <p>age：{{age}}</p>
      <button @click="shouNumber">showNumber</button>
    </form>
    <select name="fruit" id="fruit" v-model="selected">
      <option :key="item.id" v-for="item in furit">{{item.name}}</option>
    </select>
    <p>你选择了:{{selected}}</p>
    <div id="single">
      <input type="checkbox" name="1" id="1" value="1" v-model="da">
      <label for="1">{{da}}</label>
    </div>
    <div id="multiple">
      <input type="checkbox" id="2" value="2" v-model="checkNames">
      <label for="2">2</label>
      <input type="checkbox" id="3" value="3" v-model="checkNames">
      <label for="3">3</label>
      <input type="checkbox" id="4" value="4" v-model="checkNames">
      <label for="4">4</label>
      <span>你选择了：{{checkNames}}</span>
    </div>
    <div id="danxuan">
      <input type="radio" id="runoob" value="Runoob" v-model="picked">
      <label for="runoob">Runoob</label>
      <br>
      <input type="radio" id="google" value="Google" v-model="picked">
      <label for="google">Google</label>
      <p>你选择了：{{picked}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "form1",
  props:['message1'],
  data() {
    return {
      name: "",
      pass: "",
      age:"",
      selected: "apple",
      furit: [
        {
          id: 1,
          name: "apple"
        },
        {
          id: 2,
          name: "banana"
        },
        {
          id: 3,
          name: "strawberry"
        }
      ],
      da: false,//复选款结果如果不设为数组，那么选中就是true，否则就是false
      checkNames: [],
      picked:''
    };
  },
  methods:{
    shouNumber(){
      console.log(this.age)
    }
  }
};
</script>

