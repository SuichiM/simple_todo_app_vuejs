<template>
  <div id="app">
    <Navvar/>

    <div class="container">

      <router-view></router-view>

    </div>
        
  </div>
</template>

<script>
import Navvar from "@/components/Navvar.vue";
export default {
  name: 'app',
  components: {
    Navvar
  }
}
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
  border-radius: 0 !important;
}
#body {
    color: #2c3e50;
}
</style>