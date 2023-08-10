<template>
  <section id="projects-section">
    <h2 class="section-title projects-title">Projects</h2>
    <div class="project-area">
      <div
        class="project-container"
        id="ITDTWebsite"
        data-bgcolor="rgb(0, 94, 131)"
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
      <div
        class="project-container"
        id="Codequest"
        data-bgcolor="rgb(73, 108, 145)"
      >
        <div class="project-text">
          <p class="project-num">&lt;2&gt;</p>
          <h4 class="project-title">Code Quest</h4>
          <p class="project-desc">
            The ITDT Code Quest is a web application under continuous
            development since April 2023. The application provides hands-on
            exercises and videos for members to learn different web development
            technologies.
          </p>
          <base-cta-button
            target="_blank"
            href="https://www.figma.com/proto/aCqvRy2HGhMsIs8kjmmh6k/Code-Quest?type=design&node-id=28-35&t=ZD0yTIEUJtNFODyH-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A105&mode=design"
            >Prototype</base-cta-button
          >
        </div>
        <img
          id="canvas3d"
          src="../../assets/projects/projects-codequest.png"
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

    const switchColor = (color) => {
      gsap.to(document.body, {
        duration: 0.3,
        ease: "power1.inOut",
        backgroundColor: color,
      });
    };

    projectContainer.forEach((project, i) => {
      const color = project.dataset.bgcolor;
      console.log(i, color);

      const previousColor = projectContainer[i - 1]
        ? projectContainer[i - 1].dataset.bgcolor
        : "#1e2121";
      ScrollTrigger.create({
        trigger: project,
        start: "top center",
        end: "bottom center",
        onEnter: () => switchColor(color),
        onEnterBack: () =>
          i === projectContainer.length - 1 && switchColor(color),
        onLeave: () =>
          i === projectContainer.length - 1 && switchColor("#000000"),
        onLeaveBack: () => switchColor(previousColor),
        // markers: { indent: 150 * i },
        id: i + 1,
      });
    });
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
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
  flex-direction: column;
}
.project-container {
  display: flex;
  align-items: center;
  min-height: 50vh;
}
.project-container:not(:last-child) {
  padding-bottom: 5vh;
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
