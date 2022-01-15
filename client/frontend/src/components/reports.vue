<template>
        <div class="reports">
        <div class="container">
            
           <router-link :to="{name : 'SellerReportsDaily', params: {sellerid : this.sellerId}}" > <button type="button" class="btn">Daily</button> </router-link>
            <router-link :to="{name : 'SellerReportsWeekly', params: {sellerid : this.sellerId}}" > <button type="button" class="btn">Weekly</button> </router-link>
            <router-link :to="{name : 'SellerReportsMonthly', params: {sellerid : this.sellerId}}" >  <button type="button" class="btn">Monthly</button> </router-link>

            <div class="col-8" id="chartdiv"></div>   
        </div>
        </div>
</template>

<script>

export default{
    name:'Reports',
    data(){
        return{
            sellerId : this.$route.params.sellerid,

        }
    }
}
</script>

<style scoped>
    .reports{
        margin: 0px;
        height: 100%;
        width: 100%;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button{
        width:180px;
        height:180px;
        font-size: 18px;
        background-color: rgb(89, 89, 211);
        color: white;
        margin:20px;
        border-radius: 10%;
        
    }
    button:hover{
        cursor: pointer;
    }
    .col-8{
        height: 300px;
    }
</style>