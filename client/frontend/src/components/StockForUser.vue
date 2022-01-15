<template>
    <table className="table">
        <caption>Stocks</caption>
        <tr>
        <th>Seller Name</th>
        <th>location</th>
        <th>Quantity</th>
        <th>price</th>
        </tr>
        <tbody v-for = "stock in stocks" v-bind:key="stock.loc">    
            <tr>
                <td>{{stock.sellername}} </td> 
                <td>{{stock.loc}} </td>
                <td>{{stock.quantity}} </td> 
                <td>{{stock.price}} </td> 
                <td></td>
                
            </tr>           
        </tbody>
    </table>
</template>




<script>
export default{
    name:'StockForUser',
    data (){
        return {
        pid : this.$route.params.productId,
        add: null,
        remove: null,
        plus: "plus.png",
        minus: "minus.png",
        stocks: []
        };
    },
    
    mounted() {
      fetch(`http://localhost:5000/products/stocks/${this.pid}`)
        .then(res => res.json())
        .then( data => {
            this.stocks = data;
            console.log(this.stocks)
        }
         )
        .catch( err => console.log(err.message))
       
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
