<template>
    <div class="container">
        <table className="table">
            <caption>Products</caption>
            <tbody>
                <tr>
                    product1 <img v-bind:src="require('../assets/' + minus)" />
                </tr>       

                <tr>
                    product2 <img v-bind:src="require('../assets/' + minus)" />
                </tr>

                <tr>
                    product3 <img v-bind:src="require('../assets/' + minus)" />
                </tr>   
            </tbody><br>
            <button type="button" class="btn" @click="myFunction()">Add New Product</button>
        </table><br>
            <form action="">
                <input type="text" id="quantity" name="quantity" placeholder="Quantity"><br><br>
                <input type="text" id="price" name="price" placeholder="Price"><br><br>
                <input type="submit" id="submit" value="OK">
            </form>
    </div>
</template>

<script>

export default{
    name:'AddProducts',
    data: function() {
        return {
        minus: "minus.png"
        };
    }
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
        margin-bottom: 30px;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        margin:auto;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 500px;
    height: 100%;
    background-color: rgb(141, 177, 182);
    opacity:0.8;
    }
    button{
        font-size: 18px;
        width:150px;
        height: 50px;
        background-color: blue;
        color: white;
        border-radius: 7%;
    }
    button:hover{
        cursor: pointer;
    }
    img{
        width:23px;
        height:23px;
        margin-left:5px;
    }
    img:hover{
        cursor: pointer;
    }
    #submit{
        border-radius: 10%;
        margin-left:66px;
        height: 30px;
        font-size: 15px;
    }
    #submit:hover{
        cursor: pointer;
    }
</style>