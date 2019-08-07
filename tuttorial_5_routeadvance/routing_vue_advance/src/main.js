import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile.vue'

Vue.use(VueRouter);

const router = new VueRouter(
  {
    routes:[
      { path: '/', component: Home },
      { path: '/user/:id', component: UserProfile, props: true}
    ],
    mode:'history'
  }
);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
