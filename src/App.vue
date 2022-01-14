<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Login></Login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from "@/view/Login";
export default {
  name: 'App',
  components: {
    // HelloWorld
      Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    font-size: 15px;
  margin-top: 60px;
}
</style>
