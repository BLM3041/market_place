<template>
    <div class="container">
            <button type="button" class="btn">Reports</button>
            <button type="button" class="btn">Seller Oparetions</button>
    </div> 
    
</template>

<script>

export default{
    name:'statePage'
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
        background-color: blue;
        color: white;
        margin:20px
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
