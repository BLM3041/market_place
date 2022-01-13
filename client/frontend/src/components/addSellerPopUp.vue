<template>
    <div class="addFrom">    
        <form>
            <input type="text" id="name" name="name" placeholder="name"><br>
            <input type="text" id="surname" name="surname" placeholder="surname"><br>
            <input type="submit" value="Submit">
        </form>
    </div> 
</template>

<script>

export default{
    name:'addSellerPopUp'
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
