<template>
    <div class="container">
        <div  v-for = "sale in AllSales" v-bind:key="sale.productid">
            <button type="button" class="btn" @click="seeProductStock(product.productid)"> {{product.productname}} </button>
        </div>
    </div> 
</template>

<script>

export default{
    name:'DailyReports',
    data() {
        return {
        AllSales : [],
        sellerId : this.$route.params.sellerid
        };
    },
  mounted() {
      fetch(`http://localhost:5000/sellers/${this.sellerId}/reports`)
        .then(res => res.json())
        .then( data => this.AllProducts = data )
        .catch( err => console.log(err.message))
       
  },
}
</script>

<style scoped>
    .container{
        display: inline-block;
    }
    button{
        width:180px;
        height:180px;
        font-size: 18px;
        background-color: blue;
        color: white;
        margin:20px
        
    }
    button:hover{
        cursor: pointer;
    }
</style>