<template>
  <section id="projects-section">
    <h2 class="section-title projects-title">Projects</h2>
    <div class="project-area">
      <div
        class="project-container"
        id="ITDTWebsite"
        data-bgColor="rgb(0, 94, 131)"
      >
        <div class="project-text">
          <p class="project-num">&lt;1&gt;</p>
          <h4 class="project-title">ITDT Website</h4>
          <p class="project-desc">
            The ITDT Website was created in January 2023 and combined the
            efforts from many members of the team's web stream, showcasing our
            work and photos from past activities.
          </p>
          <base-cta-button target="_blank" href="https://dbsitdt.netlify.app"
            >Check it out</base-cta-button
          >
        </div>
        <img
          id="canvas3d"
          src="../../assets/projects/projects-dbsitdt.png"
          alt="dbsitdt"
          draggable="false"
        />
        <!-- <video
          autoplay
          loop
          muted
          playsinline
          id="canvas3d"
          src="../../assets/projects/projects-dbsitdt.webm"
        ></video> -->
      </div>
    </div>
  </section>
</template>
<script>
// import { Application } from "@splinetool/runtime";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  async mounted() {
    // const canvas = this.$refs.canvas3d;
    // const app = new Application(canvas);
    // await app.load(
    //   "https://prod.spline.design/9SVDrl2aFACVIQ2Z/scene.splinecode"
    // );

    gsap.registerPlugin(ScrollTrigger);
    const projectContainer = gsap.utils.toArray(".project-container");
    projectContainer.forEach((project) => {
      gsap.from(`#${project.id}`, {
        scrollTrigger: { trigger: `#${project.id}` },
        opacity: 0,
        duration: 0.7,
      });
      gsap.to("body", {
        scrollTrigger: {
          trigger: `#${project.id}`,
          start: "top center",
          end: "bottom center",
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
        background: `${project.dataset.bgcolor}`,

        duration: 0.3,
      });
    });
  },
};
</script>
<style scoped>
#projects-section {
  padding: 5vw;
}
.project-area {
  margin-block: 3vh;
  color: white;
  display: flex;
  align-items: center;
}
.project-container {
  display: flex;
  align-items: center;
  min-height: 50vh;
}
.project-text {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.project-num {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.712);
}
.project-title {
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  font-weight: 700;
  margin-bottom: 2vw;
}
.project-desc {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
}
.button-primary {
  margin: 0;
  margin-top: 3vh;
}
#canvas3d {
  max-height: 60vh;
}
@media (max-width: 1300px) {
  .project-area .project-container #canvas3d {
    min-height: 40vw;
    min-width: 60vw;
  }
}
@media (max-width: 1008px) {
  .project-area .project-container {
    flex-direction: column;
  }
  .project-text {
    order: 2;
  }
  #canvas3d {
    max-width: 100%;
  }
}
@media (max-width: 678px) {
  .project-container #canvas3d {
    max-height: 40vh;
  }
}
</style>
