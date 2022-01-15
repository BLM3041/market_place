

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

import DailyReports from "../components/DailyReports"
import WeeklyReports from "../components/WeeklyReports"
import MonthlyReports from "../components/MonthlyReports"

/*Customer Pages*/
import CustomerPage from "../components/CustomerPage.vue"
import StockForUser from "../components/StockForUser.vue"



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
    path: "/home/:productId",
    name: "StockForUser",
    component: StockForUser
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
    path: "/sellers/:sellerid/products/DeleteProducts",
    name: "DeleteProducts",
    component: DeleteProducts
  },
 
  {
    path: "/sellers/:sellerid/reports",
    name: "SellerReports",
    component: Reports
  },
  {
    path: "/sellers/:sellerid/reports/daily",
    name: "SellerReportsDaily",
    component: DailyReports
  },
  {
    path: "/sellers/:sellerid/reports/monthly",
    name: "SellerReportsMonthly",
    component: MonthlyReports
  },
  {
    path: "/sellers/:sellerid/reports/weekly",
    name: "SellerReportsWeekly",
    component: WeeklyReports
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}
  
)

export default router;