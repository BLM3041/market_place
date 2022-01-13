<template>
  <addSellerPopUp/> 
</template>

<script>
//import sellerPage from './components/sellerPage.vue'
//import statePage from './components/statePage.vue'
//import products from './components/products.vue'
//import productOperations from './components/productOperations.vue'
//import deleteProducts from './components/deleteProducts.vue'
//import sellerOperations from './components/sellerOperations.vue'
import addSellerPopUp from './components/addSellerPopUp.vue'
export default {
  name: 'App',
  components: {
    addSellerPopUp
  }
}
</script>

<style>
html {
   margin: 0px;
   height: 100%;
   width: 100%;
}

body {
   margin: 0px;
   min-height: 100%;
   width: 100%;
   position: absolute;
}
#app {
  margin: 0px;
  min-height: 100%;
  width: 100%;
  position: absolute;
}

</style>
