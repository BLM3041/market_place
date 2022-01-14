<template>
    <table className="table">
        <caption>Stocks</caption>
        <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        </tr>
        <tbody v-for = "stock in stocks" v-bind:key="stock.productid">    
            <tr>
                <td>{{stock.productname}} </td> 
                <td>{{stock.quantity}} </td> 
                <td>
                <label for = 'add'> </label>
                <input type='number' id='add' name= 'add' v-model="add"><img @click="addQuantity(stock.productid)"  v-bind:src="require('../assets/' + plus)" />
                </td>
                <td>
                <label for = 'minus'> </label>
                <input type='number' id='minus' name= 'minus'  v-model="remove">  <img @click="DeleteQuantity(stock.productid)" v-bind:src="require('../assets/' + minus)" />
                </td>
                
            </tr>           
        </tbody>
    </table>
</template>




<script>
import axios from 'axios'
export default{
    name:'Stocks',
    data (){
        return {
        Sid : this.$route.params.sellerid,
        add: null,
        remove: null,
        plus: "plus.png",
        minus: "minus.png",
        stocks: []
        };
    },
    
    mounted() {
        console.log("mounted");
      fetch(`http://localhost:5000/sellers/${this.Sid}/stocks`)
        .then(res => res.json())
        .then( data => this.stocks = data )
        .catch( err => console.log(err.message))
       
  },
  methods: {
      addQuantity(productid){

          const info ={
            sellerId: this.Sid,
            product_id : productid,
            quantity : this.add
          }
          console.log(info)
          axios.post(`http://localhost:5000/sellers/${this.Sid}/updateStock`, info).
          then(
            res =>{
                console.log(res)
                location.reload();
            }
          )
          .catch(
              err =>
              console.log(err.message)
          )
      },
      DeleteQuantity(productid){
         const info ={
            sellerId: this.Sid,
            product_id : productid,
            quantity : this.remove 
          }
          console.log(info)
          axios.post(`http://localhost:5000/sellers/${this.Sid}/sell`, info).
          then(
            res =>{
                console.log(res)
                if(res.data.sold_id == null || res.data.sold_id== -1){
                    alert("Stock is dropped under 0")
                }
                else{
                    location.reload();
                }
                
            }
          )
          .catch(
              err =>{
                  console.log(err.message)
                  alert("Stock is dropped under 0")
              }
                
          )
      }

  },
  
};
</script>

<style scoped>
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
</style>
