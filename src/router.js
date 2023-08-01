import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./pages/landing/LandingPage.vue";
import EventInfo from "./pages/events/EventInfo.vue";
import EventsPage from "./pages/events/EventsPage.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage },
    { path: "/events", component: EventsPage },
    { path: "/events/:id", props: true, component: EventInfo },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
