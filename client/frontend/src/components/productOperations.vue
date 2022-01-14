<template>
    <div class="container">
            <div  v-for = "product in AllProducts" v-bind:key="product.productid">
                <li type="button" class="btn"> {{product.productname}} </li><button type="button" class="btn" >Delete Product</button>
            </div>
            <br>
            <router-link :to="{name : 'addProduct', params: {sellerid : this.sellerId}}" ><button type="button">Add Product</button></router-link>
            
    </div> 
    
</template>

<script>

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
      }
  }

}
</script>
<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    button{
        width:50px;
        height:50px;
        font-size: 11px;
        background-color: blue;
        color: white;
        margin:20px;
        border-radius: 10%;
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
