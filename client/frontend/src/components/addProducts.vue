<template>
    <div class="container">
            <h1>Products</h1>
            <form @submit.prevent="handleSubmit()">
                <label for="product">Choose a product:</label>
                <select name="product" id="product" v-model="product" >
                    <option v-for = "product in AllProducts" v-bind:key="product.product_id" :value="`${product.product_id}`">{{product.product_name}}</option>
                </select>
                <br><br>
                <input type="text" id="quantity" name="quantity" placeholder="Quantity" v-model="quantity"><br><br>
                <input type="text" id="price" name="price" placeholder="Price" v-model="price"><br><br>
                <input type="submit" value="Submit">
            </form>
            <p>Not in the list? </p>
            <form @submit.prevent="handleAddNew()">
            <input type="text" id="product_name" name="product_name" placeholder="product name" v-model="product_name"><br><br>
            <input type="submit" value="Add New Product">
            </form>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'AddProducts',
    
    data(){
        return{
            AllProducts : [],
            sellerId : this.$route.params.sellerid,
            product: null,
            quantity: null,
            price: null,
            product_name: ''
        }
    },
    mounted() {
      fetch(`http://localhost:5000/sellers/${this.sellerId}/productsNotInStock`)
        .then(res => res.json())
        .then( data =>{ 
            this.AllProducts = data
            console.log(data)
            
            }
             )
        .catch( err => console.log(err.message))
       
  },
  methods: {
      handleSubmit(){

          const data = {
              product_id : this.product,
              quantity : this.quantity,
              price : this.price
          }
          console.log("this is our", data)
          axios.post(`http://localhost:5000/sellers/${this.sellerId}/addStock`, data)
            .then(res => {
                console.log(res)
                let pid = res.data.product 

                if ( pid != null &&  pid != -1){
                    console.log("Successed");
                    alert("Product successfully added ")
                     this.$router.push(`/sellers/${this.sellerId}/products`);
                }
                else{
                    alert("Error Occurred! please try again ")
                }
            })
            .catch(err => {
                console.log(err.message);
                alert("Error Occurred! please try again ")
            })
          },
          handleAddNew(){

          const data = {
              product_name : this.product_name,
          }
          console.log("this is our ", data)
          axios.post(`http://localhost:5000/products`, data)
            .then(res => {
                console.log(res)
                let pid = res.data.id 

                if ( pid != -1){
                    console.log("Successed");
                    alert("Product successfully added to the list. Please choose it and specify the other fields ")
                     location.reload();
                }
                else{
                    alert("Error: Product already exists ")
                }
            })
            .catch(err => {
                console.log(err.message);
                alert("Error Occurred! please try again ")
            })
          }
      
      }
}
</script>

<style scoped>
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
        margin-bottom: 30px;
    }
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
    button{
        font-size: 18px;
        width:150px;
        height: 50px;
        background-color: blue;
        color: white;
        border-radius: 7%;
    }
    button:hover{
        cursor: pointer;
    }
    img{
        width:23px;
        height:23px;
        margin-left:5px;
    }
    img:hover{
        cursor: pointer;
    }
    #submit{
        border-radius: 10%;
        margin-left:66px;
        height: 30px;
        font-size: 15px;
    }
    #submit:hover{
        cursor: pointer;
    }
</style>