import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./auth-guard";

const Signup = () => import('@/components/auth/Sign-Up')
const Signin = () => import('@/components/auth/Sign-In')
const privateHome = () => import("@/components/core/Home/Home-private.vue");
const Foods = () => import('@/components/pages/Food/Foods.vue');
const Mood = () => import('@/components/Select/Select-Mood')
const Meistask = () => import("@/components/pages/MTask/Task.vue");
const profile = () => import("@/components/auth/Profile.vue");
const publicHome = () => import("@/components/core/Home/Home-public.vue");
const Error = () => import("@/components/core/Error/Error.vue");
const create = () => import("@/components/core/Create/Create.vue");
const Health = () => import("@/components/pages/Health/Health-form.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "publicHome",
    component: publicHome,
  },
  {
    path: "/dashboard",
    name: "privateHome",
    component: privateHome,
    beforeEnter: AuthGuard

  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: "/health",
    name: "Health",
    component: Health,
    beforeEnter: AuthGuard

  },
  {
    path: "/bmi",
    name: "Bmi",
    component: () => import("../components/pages/Health/BMI.vue"),
    beforeEnter: AuthGuard
  },
  {
    path: "/create",
    name: "Create",
    component: create,
    beforeEnter: AuthGuard

  },
  {
    path: "/foods",
    name: "Food",
    component: Foods,
     beforeEnter: AuthGuard

  },
  {
    path: "/mood",
    name: "Mood",
    component: Mood,
     beforeEnter: AuthGuard
  },
  {
    path: "/foods/edit/:id",
    component: () => import("../components/pages/Food/Food-details.vue"),
    beforeEnter: AuthGuard
  },
  {
    path: "/meistask",
    name: "Meistask",
    component: Meistask,
    beforeEnter: AuthGuard

  },
  {
    path: "**",
    name: "Error",
    component: Error
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
