<template>
  <section id="projects-section">
    <h2 class="section-title projects-title" ref="sectionTitle">Projects</h2>
    <div class="project-area">
      <div
        class="project-container"
        id="ITDTWebsite"
        :data-bgcolor="'rgb(0, 94, 131)'"
      >
        <div class="project-text">
          <p class="project-num">&lt;1&gt;</p>
          <h4 class="project-title">ITDT Website</h4>
          <p class="project-desc">
            The IT Development Team's official website is a platform created and
            maintained by the team members to showcase their work and share
            their experiences. The website serves as a central hub for visitors
            to learn more about the team, its members, and the projects they
            have worked on. Paired with a modern interface, the site showcases
            the diverse range of software development projects undertaken by the
            team, including web applications, mobile apps, and other IT
            solutions.
          </p>
          <BaseCTAButton target="_blank" href="https://dbsitdt.netlify.app"
            >Check it out</BaseCTAButton
          >
        </div>
        <img
          id="canvas3d"
          src="../../assets/projects/projects-dbsitdt.png"
          alt="dbsitdt"
          draggable="false"
        />
      </div>
      <div
        class="project-container"
        id="Codequest"
        :data-bgcolor="'rgb(73, 108, 145)'"
      >
        <div class="project-text">
          <p class="project-num">&lt;2&gt;</p>
          <h4 class="project-title">Code Quest</h4>
          <p class="project-desc">
            The ITDT Code Quest is a web application under continuous
            development since April 2023. The application is designed
            specifically as a learning platform for web development. It serves
            as a comprehensive resource for web stream members to acquire and
            enhance their skills in the basics of web development. Through a
            user-friendly interface, Code Quest offers a step-by-step and
            hands-on approach to learning web development.
          </p>
          <BaseCTAButton
            target="_blank"
            href="https://itdt-codequest.netlify.app/"
            >Check it out</BaseCTAButton
          >
        </div>
        <img
          id="canvas3d"
          src="../../assets/projects/projects-codequest.png"
          alt="dbsitdt"
          draggable="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "scramble-text";
gsap.registerPlugin(ScrollTrigger);

const sectionTitle = ref(null);
const scrambleSectionTitle = function () {
  const scrambleText = new ScrambleText(sectionTitle.value);
  scrambleText.start();
};
onMounted(() => {
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

    const previousColor =
      i > 0 ? projectContainer[i - 1].dataset.bgcolor : "#1e2121";
    ScrollTrigger.create({
      trigger: project,
      start: "top center",
      end: "bottom center",
      onEnter: () => switchColor(color),
      onEnterBack: () =>
        i === projectContainer.length - 1 && switchColor(color),
      onLeave: () =>
        i === projectContainer.length - 1 && switchColor("#1e2121"),
      onLeaveBack: () => switchColor(previousColor),
      id: i + 1,
    });
    gsap.from(project.querySelector(".project-text"), {
      opacity: 0,
      x: -100,
      duration: 0.4,
      delay: 0.2,
      scrollTrigger: {
        trigger: project,
      },
    });
  });

  ScrollTrigger.create({
    trigger: "#projects-section",
    onEnter: scrambleSectionTitle,
    onEnterBack: scrambleSectionTitle,
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
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
  margin-right: clamp(3rem, 10%, 5rem);
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
  font-size: clamp(1rem, 1.5vw, 1.2rem);
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
    min-height: 30vw;
    min-width: 35vw;
  }
}
@media (max-width: 1008px) {
  .project-area .project-container {
    flex-direction: column;
  }
  .project-text {
    order: 2;
    margin-right: 0;
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
