<template>
    <div class="addFrom">    
        <form>
            <input type="text" id="name" name="name" placeholder="Product Name"><br>
            <input type="submit" value="OK" @click="sendToBackend()">
        </form>
    </div> 
</template>

<script>

export default{
    name:'addProductsPopUp',
    methods:{
            sendToBackend: function(){
                console.log("hey")
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
