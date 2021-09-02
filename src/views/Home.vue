<template>
  <div class="page container-fluid">
    <div class="partitions row g-0">
      <div
        class="left-cont col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
      >
        <div class="imgleft">
          <img class="prof-image" src="https://picsum.photos/600/1000" />
        </div>
      </div>
      <div
        class="right-cont col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8"
      >
        <div class="projects">
          <h1 class="projects-title">Projects</h1>
          <div class="project-rows row justify-content-center">
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
            <ProjectCard
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import navbar from "@/components/navbar.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Home",
  components: {
    ProjectCard,
  },
};
</script>

}

<style scoped>
.prof-image {
  width: 100%;
  min-height: 100vh;
}
.projects-title {
  color: white;
  text-align: center;
}
.projects {
  background-color: #2c2c2c;
}
.project-rows {
  margin: 0px;
}
.page {
  padding: 0px;
}

.left-cont {
  min-height: 100vh;
}
.right-cont::-webkit-scrollbar {
  display: none;
}

.right-cont {
  overflow-y: scroll;
  height: 100vh;
}
</style>
