<template>
  <sellerPage/> 
</template>

<script>
import sellerPage from './components/sellerPage.vue'

export default {
  name: 'App',
  components: {
    sellerPage
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
