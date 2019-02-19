<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/">Go to Index</router-link>
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </div>
    
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import VueRouter from 'vue-router';

export default {
  name: 'app',
}
</script>

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
