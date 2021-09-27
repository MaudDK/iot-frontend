<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="nav col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
        <p class="hello">
          <strong>{{ getName.username }}</strong>
        </p>
        <button
          class="submit-button"
          v-if="isLogged"
          @click="logout()"
          type="button"
        >
          Logout
        </button>
      </div>
      <div class="dash col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
        <div class="row">
          <div
            v-for="sensor in allSensors"
            class="sensors col-11 col-sm-6 col-md-4 col-lg-3 col-xl-3"
            :key="sensor"
          >
            <div class="project-card d-flex justify-content-center m-1">
              <div class="content">
                <h3 class="project-title">{{ sensor.name }}</h3>
                <p class="project-description">
                  Building: {{ sensor.building }}
                  <br />
                  Location:{{ sensor.location }}
                  <br />
                  Status: {{ sensor.status }}
                </p>
                <p class="project-more">Reading: {{ sensor.reading }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TestComponent from "@/components/TestComponent.vue";
import { mapGetters } from "vuex";
export default {
  components: {},
  name: "Dashboard",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapGetters(["getName", "allSensors", "isLogged"]),
  },
  mounted() {
    this.$store.dispatch("sensors").catch((err) => {
      console.log(err);
    });
  },
};
</script>
<style scoped>
.dash {
  min-height: 100vh;
  background-color: rgb(26, 29, 48);
}

.nav {
  justify-content: center;
  padding: 0;
  margin: 0;
}
.hello {
  padding-top: 5px;
  align-self: flex-start;
  color: white;
  display: flex;
}

.submit-button {
  align-self: flex-end;
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #4955ff9c;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
}

.submit-button:hover {
  background: #4eacaf;
  color: white;
}

.logoutBtn {
  color: white;
}

.project-card {
  border: 5px solid rgb(100, 151, 96);
  background-color: white;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  background-color: rgb(75, 81, 119);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

.project-description {
  font-size: 90%;
  z-index: 2;
  opacity: 1;
  letter-spacing: 1px;
  transition: 0.5s;
}

.project-title {
  font-size: 1.5em;
  font-weight: 600;
  color: white;
  z-index: 2;
  opacity: 1;
  letter-spacing: 1px;
  transition: 0.5s;
}

.project-number {
  position: relative;
  right: -180px;
  font-size: 2em;
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
}

.project-more {
  font-size: 1.2em;
  font-weight: bold;
}

.content {
  text-align: center;
  color: white;
}
</style>
