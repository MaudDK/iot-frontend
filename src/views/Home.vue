<template>
  <div
    class="
      login-page
      container-fluid
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import navbar from "@/components/navbar.vue";
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "Home",
  components: {
    LoginComponent,
  },
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
}
</style>
