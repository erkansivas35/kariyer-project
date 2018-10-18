<template>
  <div id="app">
    <div id="nav" v-if="$route.path != '/joblist'">
     <router-link to="/">Anasayfa'ya dön</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

h3,
p,
small {
  margin: 0;
}
</style>
