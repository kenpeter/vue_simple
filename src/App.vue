<!-- html code -->
<template>
  <!-- layout code -->
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<!-- javascript -->
<script>
// export this component named app
export default {
  name: 'app'
}
</script>

<!-- style -->
<!-- add style to #id=app -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
