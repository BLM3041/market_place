<template>
    <table className="table">
        <caption>Stocks</caption>
        <tr>
        <th>Product Id</th>
        <th>Quantity</th>
        </tr>
        <tbody v-for = "stock in stocks" v-bind:key="stock.productid">    
            <tr>
                <td>{{stock.productid}} </td> 
                <td>{{stock.quantity}} </td> 
                <img v-bind:src="require('../assets/' + plus)" /> 
                <img v-bind:src="require('../assets/' + minus)" />
                
            </tr>           
        </tbody>
    </table>
</template>




<script>

export default{
    name:'Stocks',
    data (){
        return {
        plus: "plus.png",
        minus: "minus.png",
        sellerId: 4, 
        stocks: []
        };
    },
    
    mounted() {
        console.log("mounted");
      fetch(`http://localhost:5000/sellers/4/stocks`)
        .then(res => res.json())
        .then( data => this.stocks = data )
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
