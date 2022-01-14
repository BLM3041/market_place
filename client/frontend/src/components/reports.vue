<template>
        <div>
        <div class="container">
            
            <button type="button" class="btn">Daily</button>
            <button type="button" class="btn">Weekly</button>
            <button type="button" class="btn">Monthly</button>
        </div>
        <div class="col-8" id="chartdiv"></div>   
        </div>
</template>

<script>

export default{
    name:'Reports'
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
    .col-8{
        height: 300px;
    }
</style>
