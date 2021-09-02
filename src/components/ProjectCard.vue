<template>
  <div class="project-card d-flex justify-content-center m-4">
    <div class="content">
      <h3 class="project-title">Title</h3>
      <p class="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit
        hendrerit efficitur. Nunc vel ex sed elit pulvinar placerat. Nullam
        velit neque, consequat eget mi vitae, sodales scelerisque elit.
      </p>
      <a class="project-more">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
};
</script>

<style scoped>
.project-card {
  background-color: white;
  border-radius: 10px;
  width: 450px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  background-color: #1d1d1d;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

.project-card:hover .project-title {
  opacity: 1;
  transform: scale(1.2);
}

.project-card:hover .project-description {
  opacity: 1;
  transform: translateY(0px);
}

.project-description {
  font-size: 1.1em;
  z-index: 2;
  opacity: 0.5;
  font-weight: 366;
  letter-spacing: 1px;
  transition: 0.5s;
  transform: translateY(190px);
}

.project-title {
  font-size: 1.5em;
  font-weight: 600;
  color: white;
  z-index: 2;
  opacity: 0.5;
  letter-spacing: 1px;
  transform: translateY(86px);
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

.content {
  text-align: center;
  color: white;
}
</style>
