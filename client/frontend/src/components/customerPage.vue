<template>
    <div class="container">
        <div class="items" v-for = "product in AllProducts" v-bind:key="product.productid">
            <router-link :to="{name : 'StockForUser', params: {productId: product.productid}}" ><button type="button" class="btn" @click="seeProductStock(product.productid)"> {{product.productname}} </button></router-link>
        </div>
    </div> 
</template>

<script>

export default{
    name:'CustomerPage',
    data() {
        return {
        AllProducts : []
        };
    },
  mounted() {
      fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then( data => {this.AllProducts = data 
        console.log(this.AllProducts)})
        .catch( err => console.log(err.message))
       
  },
  methods: {
      
      seeProductStock(productid){
          console.log(productid)
          
      }
  },
}
</script>

<style scoped>
    .container{
        display: inline-block;
        width:100%;
        height: 100%;

    }
    button{
        width:180px;
        height:180px;
        font-size: 18px;
        background-color: rgb(169, 62, 240);
        color: white;
        margin:20px;
        border-radius: 10%;
        
    }
    button:hover{
        cursor: pointer;
    }
    .items{
        padding: 0%;
        margin: 0%;
        display: inline-block;
    }
</style>