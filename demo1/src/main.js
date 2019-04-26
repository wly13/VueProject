import Vue from 'vue';
import router from './router/index'
import APP from "./App";
import store from './store/index';

Vue.config.productionTip=false;
new Vue({
  el:'#app',
  router,
  store,
  components:{APP},//声明组件
  template:'<APP/>'
})
