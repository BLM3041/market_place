<template>
    <div class="addFrom">    
        <form>
            <input type="text" id="name" name="name" placeholder="Product Name"><br>
            <input type="submit" value="OK" @click="AddProduct()">
        </form>
    </div> 
</template>

<script>
//import axios from 'axios'
export default{
    name:'AddProductsPopUp',
    methods:{
            async AddProduct(){
                
            }
    }
}
</script>

<style scoped>
    .addForm{
        margin: 0px;
        height: 100%;
        width: 100%;
        display: flex;  
    }
    form{
        margin-top: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
