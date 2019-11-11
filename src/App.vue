
<template>
  <div id="app">      
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavBar from './components/Navbar'

export default {
  components: {'nav-bar': MyNavBar},
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
    border: 2px solid black;
    padding: 20px;
    font-size: 22px;
}

ul {
    list-style-type: none;
    padding: 0;
}
li {
    font-size: 26px;
}
</style>
