/*import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
*/

import {createRouter, createWebHistory} from "vue-router"


import Login from "../components/Login.vue"
import Stocks from "../components/Stocks.vue"
import SellerOperations from "../components/SellerOperations.vue"
import StatePage from "../components/StatePage.vue"
import Reports from "../components/Reports.vue"



const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks
  },
  {
    path: "/management/sellers",
    name: "Seller Operations",
    component: SellerOperations
  },
  {
    path: "/management",
    name: "State Page ",
    component: StatePage
  },
  {
    path: "/management/reports",
    name: "Reports",
    component: Reports
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

/*

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
*/
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}
  
)

export default router;