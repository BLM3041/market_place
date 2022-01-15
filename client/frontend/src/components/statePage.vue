<template>
    <div class="container">
            <router-link to="/management/reports" ><button type="button" class="btn">Reports</button> </router-link>
            <router-link to="/management/sellers" > <button type="button" class="btn">Seller Oparetions</button></router-link>
            
    </div> 
    
</template>

<script>

export default{
    name:'StatePage'

}
</script>
<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center; 
    }
    button{
        width:180px;
        height:180px;
        font-size: 18px;
        background-color: rgb(129, 129, 255);
        color: white;
        margin:20px;
        border-radius: 10%;
        
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
