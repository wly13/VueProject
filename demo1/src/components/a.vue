<template>
  <div>
    <p>this is a component</p>
    <!-- 动画/过渡 -->
    <transition></transition>
    <!-- 99乘法表 -->
    <!-- 第一个数循环九次，第二个数循环小于等于第一个数的次数 -->
     <!-- 在vue中使用v-for，必须加入key值 -->
    <div>
      <div v-for="i in 9" :key="i.id">
          <span v-for="j in i" :key='j.id'>
              <b>{{j}}*{{i}}={{i*j}}      </b>
          </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "acomp",
};
</script>
<style>
</style>


