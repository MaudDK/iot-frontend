<template>
  <div class="project-card d-flex justify-content-center m-1">
    <div class="content">
      <h3 class="project-title">{{ name }}</h3>
      <p class="project-description">
        Building: {{ building }}
        <br />
        Location:{{ location }}
        <br />
        Status: {{ status }}
      </p>
      <p class="project-more">Reading: {{ reading }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SensorComponent",
  props: {
    name: String,
    building: String,
    location: String,
    status: String,
    reading: Number,
  },
};
</script>

<style scoped>
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
