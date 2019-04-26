import Vue from 'vue'
import Router from 'vue-router'
import moban from '@/components/moban';
import about from '@/components/about';
import shopping from "@/components/shopping";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/index',
      name: 'moban',
      component: moban
    },{
      path:'/about',
      name:'about',
      component:about
    },{
      path:'/shopping',
      name:'shopping',
      component:shopping
    }
  ]
})
