<template>
  <div id="nav">
    <div class="container-fluid">
      <div class="row">
        <div
          class="navmenu col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 col-xxl-1"
        >
          <NavbarComponent />
        </div>
        <div
          class="
            pagebody
            col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 col-xxl-11
          "
        >
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navmenu {
  padding: 0px;
}

.pagebody {
  background-color: #202020 !important;
  padding: 0px !important;
  margin: 0xp !important;
}

#nav {
  margin: 0px;
}
</style>
