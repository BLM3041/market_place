<template>
    <div class="container">
            <div  v-for = "product in AllProducts" v-bind:key="product.productid">
                <li type="button" class="btn"> {{product.productname}} </li><button type="button" class="btn" @click="DeleteProduct(product.productid)" >Delete Product</button>
            </div>
            <br>
            <router-link :to="{name : 'addProduct', params: {sellerid : this.sellerId}}" ><button type="button">Add Product</button></router-link>
            
    </div> 
    
</template>

<script>
import axios from 'axios'
export default{
    name:'ProductOperations',
    data(){
        return{
            AllProducts : [],
            sellerId : this.$route.params.sellerid
        }
    },
    mounted() {
      fetch(`http://localhost:5000/sellers/${this.sellerId}/stocks`)
        .then(res => res.json())
        .then( data => this.AllProducts = data )
        .then(console.log(this.AllProducts))
        .catch( err => console.log(err.message))
       
  },
  methods:{
      AddProduct(){
          this.$router.push('/addProduct')
      },
      DeleteProduct(productid){
        const info ={
            product_id: productid
        }
        console.log(info)
        axios.post(`http://localhost:5000/sellers/${this.sellerId}/deleteFromStock`, info)
          .then(res => {
              console.log(res)
              let deleted = res.data.deleted
              if ( deleted != -1){
                    console.log("Successfully Removed");
                    alert("product was successfully removed");
                    location.reload();
                }
                else{
                    alert("Product does not exist! please try again ")
                    alert(res.data.message)
                }
          }
           

          )
          .catch(err => console.log(err.message))
      }
  }

}
</script>
<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center; 
    }
    button{
        width:50px;
        height:50px;
        font-size: 11px;
        background-color: blue;
        color: white;
        margin:20px
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
