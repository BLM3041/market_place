<template>
        <div class="container">
            
            <router-link to="/sellers/sellerid/reports" ><button type="button" class="btn">Reports</button> </router-link>
            <router-link to="/sellers/sellerid/products" ><button type="button" class="btn">Product Operations</button></router-link>
            <router-link to="/sellers/sellerid/stocks" ><button type="button" class="btn">Sale Operations</button></router-link>
        </div>   
</template>

<script>

export default{
    name:'SellerPage'
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
        background-color: blue;
        color: white;
        margin:20px;
        border-radius: 10%;
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
