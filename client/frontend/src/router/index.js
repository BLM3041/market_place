import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../components/Login.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import("../components/Products.vue"),
  },
  {
    path: "/sellers",
    name: "Seller Operations",
    component: () =>
      import("../components/SellerOperations.vue"),
  },
  {
    path: "/management",
    name: "State Page ",
    component: () =>
      import(
        "../components/StatePage.vue"
      ),
  },
  /*
  {
    path: "/browse",
    name: "User View",
    component: () =>
      import("../components/student/StatePage.vue"),
  },
  */
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;