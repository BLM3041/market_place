<template>
  <products/> 
</template>

<script>
//import sellerPage from './components/sellerPage.vue'
//import statePage from './components/statePage.vue'
import products from './components/products.vue'
export default {
  name: 'App',
  components: {
    products
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
