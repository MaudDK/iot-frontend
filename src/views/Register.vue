<template>
  <div
    class="
      register-page
      container-fluid
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <RegisterComponent class="register" />
  </div>
</template>

<script>
// @ is an alias to /src
// import navbar from "@/components/navbar.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";

export default {
  name: "Register",
  components: {
    RegisterComponent,
  },
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
}
.register {
  z-index: 1;
}
</style>
