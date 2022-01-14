<template>
    <div class="container">
    <table className="table">
        <caption>Salesmen</caption>
        <tbody>
            <tr>
                seller1 <img v-bind:src="require('../assets/' + minus)" />
            </tr>       

            <tr>
                seller2 <img v-bind:src="require('../assets/' + minus)" />
            </tr>

            <tr>
                seller3 <img v-bind:src="require('../assets/' + minus)" />
            </tr>   
        </tbody>
    </table>
    <button type="button" class="btn" @click="myFunction()">Add Seller</button>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'SellerOperations',
    data: 
    
    function() {
        return {
        minus: "minus.png"
        };
    },
    methods:{
        async getAllSellers(){
            axios
            .get('/management/sellers')
            .then(response => (this.info = response.data))
            .catch(error => console.log(error)) 
        },
            myFunction: function(){
                console.log("hey")
            }
        }
};
</script>

<style scoped>
    img{
        width:23px;
        height:23px;
        margin-left:5px;
    }
    img:hover{
        cursor: pointer;
    }
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
