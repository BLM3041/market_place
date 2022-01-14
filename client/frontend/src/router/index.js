

import {createRouter, createWebHistory} from "vue-router"

/*Mamangement pages*/
import SellerOperations from "../components/SellerOperations.vue"
import StatePage from "../components/StatePage.vue"
import Reports from "../components/Reports.vue"

/*Saler Pages*/
import Login from "../components/Login.vue"
import Stocks from "../components/Stocks.vue"
import ProductOperations from "../components/ProductOperations.vue"
import AddProducts from "../components/AddProducts.vue" 
import DeleteProducts from "../components/DeleteProducts.vue" 
import SellerPage from "../components/SellerPage.vue"

/*Customer Pages*/
import CustomerPage from "../components/CustomerPage.vue"




const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "CustomerPage",
    component: CustomerPage
  },
  {
    path: "/management/sellers",
    name: "SellerOperations",
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
  {
    path: "/sellers/:sellerid",
    name: "SellerPage",
    component: SellerPage
  },
  {
    path: "/sellers/:sellerid/products",
    name: "ProductOperations",
    component: ProductOperations
  },
  {
    path: "/sellers/:sellerid/stocks",
    name: "Stocks",
    component: Stocks
  },
  {
    path: "/sellers/:sellerid/products/addProduct",
    name: "addProduct",
    component: AddProducts
  },
  {
    path: "/sellers/:sellerid/DeleteProducts",
    name: "DeleteProducts",
    component: DeleteProducts
  },
 
  {
    path: "/sellers/:sellerid/reports",
    name: "SallerReports",
    component: Reports
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}
  
)

export default router;