import AboutView from '@/views/AboutView.vue';
import BookingView from '@/views/BookingView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue';
import PricingView from '@/views/PricingView.vue';
import ServiceView from '@/views/ServiceView.vue';
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "service",
      component: ServiceView,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/booking",
      name: "booking",
      component: BookingView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router
