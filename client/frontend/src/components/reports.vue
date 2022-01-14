<template>
        <div class="reports">
        <div class="container">
            
            <button type="button" class="btn">Daily</button>
            <button type="button" class="btn">Weekly</button>
            <button type="button" class="btn">Monthly</button>

            <div class="col-8" id="chartdiv"></div>   
        </div>
        </div>
</template>

<script>

export default{
    name:'Reports'
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
        background-color: blue;
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
