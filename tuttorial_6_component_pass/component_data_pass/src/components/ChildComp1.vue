<template>
  <div class="card">
    <h1>Şeref Altındal</h1>
    <p class="title">CEO & Founder, Example</p>
    <p>Harvard University</p>
    <p>
      <button v-on:click="passData">Change Color</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ChildComp1",
  methods: {
    passData: function() {
      let redCode=Math.random()*255;
      let greenCode=Math.random()*255;
      let blueCode=Math.random()*255;
      let rgb=[];
      rgb.push(Math.round(redCode));
      rgb.push(Math.round(greenCode));
      rgb.push(Math.round(blueCode));
      console.log(rgb);

      this.$emit('clicked',rgb);
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background:rgb(238, 238, 238);
  opacity: 0.6;
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: rgb(40, 117, 148);
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
