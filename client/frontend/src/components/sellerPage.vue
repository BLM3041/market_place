<template>
        <div class="container">
            
            <button type="button" class="btn">Reports</button>
            <button type="button" class="btn">Product Operations</button>
            <button type="button" class="btn">Sale Operations</button>
        </div>   
</template>

<script>

export default{
    name:'sellerPage'
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
        margin:20px
        
    }
    button:hover{
        cursor: pointer;
    }
</style>
