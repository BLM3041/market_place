<template>
    <div class="container">
        <ul  v-for = "sale in AllSales" v-bind:key="sale.productid">
            <li> {{sale.productid}}: {{sale.quantity}} </li>
        </ul>
    </div> 
</template>

<script>
import axios from 'axios'
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
            const info = {
                startDate:before , 
                 endDate: today
            }
            console.log(info)
      axios.post(`http://localhost:5000/sellers/${this.sellerId}/reports`, info)
     
        .then(res => {
            console.log(res)
            this.AllSales = res.data
            console.log("sales are:", this.AllSales)
            })
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