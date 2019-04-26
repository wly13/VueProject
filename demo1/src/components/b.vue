<template>
  <div id="b">
    <p>this is b component</p>
    <br>
    <div>
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
        <p class="animation-p" v-if="show">这是一个JavaScript过渡/动画效果</p>
      </transition>
    </div>
    <button @click="toggle">toggle anmiation</button>
    <br>
    <p>自定义指令</p>
    <p v-color="'red'">这是自定义指令</p>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "bcomp",
  data() {
    return {
      show: true
    };
  },
  methods: {
    beforeEnter(el) {
      $(el).css({
        left: "-500px",
        opacity: 0
      });
    },
    enter(el, done) {
      $(el).animate(
        {
          left: 0,
          opacity: 1
        },
        {
          durantion: 1500,
          complete: done
        }
      );
    },
    leave(el, done) {
      $(el).animate(
        {
          left: "500px",
          opacity: 0
        },
        {
          durantion: 1500,
          complete: done
        }
      );
    },
    toggle() {
      this.show = !this.show;
    }
  },
  directives:{
      color(el,binding){
          console.log(binding);
          el.style.color=binding.value;
      }
  }
};
</script>
<style>
.animation-p {
  position: absolute;
  left: 0;
  top: 0;
}
#b {
  position: relative;
}
</style>


