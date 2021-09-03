<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
.app {
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  background-color: rgb(35, 39, 65);
  font-family: sans-serif;
  z-index: 0;
}
</style>
