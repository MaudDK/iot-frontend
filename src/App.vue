<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
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
}
</style>
