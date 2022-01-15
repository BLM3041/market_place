<template>
    <div class="container">
    <table className="table">
        <caption>PRODUCTS</caption>
        <tbody>
        <div>
                <tr  v-for = "product in AllProducts" v-bind:key="product.productid">
                    <th type="button"> {{product.productname}} </th><button type="button" class="btn" @click="DeleteProduct(product.productid)" >Delete Product</button>
                </tr>
                <br>
                <router-link :to="{name : 'addProduct', params: {sellerid : this.sellerId}}" ><button class="btn-add" type="button">Add Product</button></router-link>        
        </div> 
    </tbody>
    </table>
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
        flex-direction: column;
        height: 100%;
        margin:auto;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 500px;
    height: 100%;
    background-color: rgb(141, 177, 182);
    opacity:0.8;
    }
    img{
        width:23px;
        height:23px;
        margin-left:5px;
    }
    img:hover{
        cursor: pointer;
    }
    tr{
        font-size: 24px;
    }
    table{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    caption{
        font-size: 30px;
        margin: 30px;
    }
    th{
        font-weight: normal;
    }
    .btn{
        background-color:rgb(199, 75, 71);
        color: white;
        width:80px;
        height:50px;
        margin: 20px;
        border-radius: 10%;
    }
    .btn-add{
        background-color:rgb(81, 199, 71);
        color: white;
        width:80px;
        height:50px;
        margin: 20px;
        border-radius: 10%;
    }
</style>
