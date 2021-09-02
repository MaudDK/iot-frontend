<template>
  <div class="home">
    <router-link class="link" to="/dashboard"
      ><h1>Welcome Team 18</h1></router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
// import navbar from "@/components/navbar.vue";

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.link {
  text-decoration: none;
  color: rgb(0, 0, 0) !important;
  font-weight: bold !important;
  transition: 0.5s;
}

.link:hover {
  transform: scale(1.2);
}
</style>
