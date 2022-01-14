<template>
    <div class="container">
        <table className="table">
            <caption>Products</caption>
            <tbody>
                <tr>
                    product1 
                </tr>       

                <tr>
                    product2
                </tr>

                <tr>
                    product3
                </tr>   
            </tbody><br>
            <button type="button" class="btn" @click="myFunction()">Add New Product</button>
        </table><br>
            <form action="">
                <input type="text" id="quantity" name="quantity" placeholder="Quantity"><br><br>
                <input type="text" id="price" name="price" placeholder="Price"><br><br>
                <input type="submit" value="OK">
            </form>
    </div>
</template>

<script>

export default{
    name:'AddProducts'
}
</script>

<style scoped>
    tr{
        font-size: 24px;
    }
    table{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    caption{
        font-size: 30px;
        margin: 30px;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    button{
        font-size: 18px;
        width:150px;
        height: 50px;
        background-color: blue
    }
    button:hover{
        cursor: pointer;
    }
</style>