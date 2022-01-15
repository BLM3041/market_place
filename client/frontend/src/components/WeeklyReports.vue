<template>
    <div class="container">
        <div  v-for = "sale in AllSales" v-bind:key="sale.productid">
            <button type="button" class="btn" @click="seeProductStock(product.productid)"> {{product.productname}} </button>
        </div>
    </div> 
</template>

<script>

export default{
    name:'WeeklyReports',
    data() {
        return {
        AllSales : [],
        sellerId : this.$route.params.sellerid
        };
    },
  mounted() {
     
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            var dd1 = dd-7;
            let before = yyyy + '-' + mm + '-' + dd1;
            console.log(today)
            console.log(before)
            const info = {
                startDate:today, 
                 endDate: before

            }
      fetch(`http://localhost:5000/sellers/${this.sellerId}/reports`,info)
        .then(res => res.json())
        .then( data => this.AllSales = data )
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