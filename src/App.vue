<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Rick and Morty</router-link> 
      <router-link to="/episode">Episode</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  
}

#nav {
  padding: 30px;
  text-align: center;
  font-size: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding-left: 15px;

    &.router-link-exact-active {
      color: #42b983;
      padding-left: 15px;
    }
  }
}
</style>

<script>

</script>
