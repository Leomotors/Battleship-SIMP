<template>
  <router-view />
</template>

<!-- Global Style -->
<style lang="scss">
@import "Anakotmai";

#app {
  text-align: center;
  color: #2c3e50;

  min-height: 100vh;
  background-image: url("https://www.postapocalypticmedia.com/wp-content/uploads/2020/12/AoTOpening-1024x683.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

* {
  font-family: Anakotmai, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
