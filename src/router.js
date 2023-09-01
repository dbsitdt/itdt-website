import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./pages/landing/LandingPage.vue";
import EventInfo from "./pages/events/EventInfo.vue";
import EventsPage from "./pages/events/EventsPage.vue";
import CreditsPage from "./pages/credits/CreditsPage.vue";
import JoinPage from "./pages/join/JoinPage.vue";
import NotFound from "./pages/NotFound.vue";
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function tryScrollToAnchor(hash, timeout = 1000, delay = 100) {
  while (timeout > 0) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      break;
    }
    await wait(delay);
    timeout = timeout - delay;
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage },
    { path: "/events", component: EventsPage },
    { path: "/events/:id", props: true, component: EventInfo },
    { path: "/credits", component: CreditsPage },
    { path: "/join", component: JoinPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      tryScrollToAnchor(to.hash, 1000, 100);
    } else {
      return {
        top: 0,
      };
    }
  },
  beforeRouteEnter() {
    this.$store.dispatch("changeLoading", true);
    this.$store.dispatch("changeLoading", false);
  },
});

export default router;
