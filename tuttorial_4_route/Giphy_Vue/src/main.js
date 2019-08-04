import Vue from 'vue'
import App from './App.vue'
import Home from './../components/Home.vue'
import Bar from './../components/Bar.vue'
import Foo from './../components/Foo.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);



const router= new VueRouter({
  routes:[
    {path: '/',component:Home},
    {path: '/foo',component:Foo},
    {path: '/bar',component:Bar}
  ],
  mode:'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
