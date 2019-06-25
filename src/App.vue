<template>
  <div id="app">
         <router-view ></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
 
  }
}
</script>

<style>
@import url("./assets/style/reset.css");
body, html{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  min-height: 100%;
  background-color: #F0F3F8;
}

</style>
