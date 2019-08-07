<template>
  <div id="app">
    {{msg}}
    <div id="content" v-bind:style="{'background-color':color}">
      <ChildComp1 @clicked="onClickChild"></ChildComp1>
    </div>
  </div>
</template>

<script>
import ChildComp1 from "./components/ChildComp1.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      color:""
    };
  },
  methods:{
    onClickChild(value){
      this.color="rgb("+value+")";
      console.log(this.color);
      }
  },
  components: {
    ChildComp1
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  background-color: #ffbb88;
}
</style>
