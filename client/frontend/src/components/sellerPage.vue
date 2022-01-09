<template>
        <div class="allBoxes">
            <a href="">
                <div class="boxes" id="reportsBox">
                    <p class="title"> Reports </p> 
                </div>
            </a>    
            <a href="">
                <div class="boxes" id="productOperationsBox">
                    <p class="title"> Product Operations </p> 
                </div>
            </a>
            <a href="">
                <div class="boxes" id="saleOperationsBox">
                    <p class="title"> Sale Operations </p>
                </div>
            </a>
        </div>   
</template>

<script>

export default{
    name:'sellerPage'
}
</script>

<style scoped>
    a{
        width:200px;
        height:200px;
        margin: 0px;
        padding: 0px;
    }
    a:link ,a:visited{
        text-decoration: none;
        color: white;
    }
    .sellerPage{
        margin: 0px;
        height: 100%;
        width: 100%;  
    }
    .boxes{
        width:200px;
        height:200px;
        background-color: blue;
        display: inline-block;
        margin: 10px;
        align-items: center;
    }
    p{  
        color:white;
        text-align: center;
        font-size: 25px;
    }
</style>
