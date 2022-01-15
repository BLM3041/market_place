<template>
        <div class="container">
            
            <router-link :to="{name : 'SellerReports', params: {sellerid : this.sellerId}}" ><button type="button" class="btn">Reports</button> </router-link>
            <router-link :to="{name : 'ProductOperations', params: {sellerid : this.sellerId}}"><button type="button" class="btn">Product Operations</button></router-link>
            <router-link :to="{name : 'Stocks', params: {sellerid : this.sellerId}}" ><button type="button" class="btn">Sale Operations</button></router-link>
        </div>   
</template>

<script>

export default{
    name:'SellerPage',
    data(){
        return{
            sellerId : this.$route.params.sellerid
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
        width:180px;
        height:180px;
        font-size: 18px;
        background-color: rgb(125, 125, 236);
        color: white;
        margin:20px;
        border-radius: 10%;
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
