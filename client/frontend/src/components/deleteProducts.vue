<template>
    <table className="table">
        <caption>PRODUCTS</caption>
        <tbody>
            <tr>
               <th>something some</th> <th><img v-bind:src="require('../assets/' + minus)" /></th>
            </tr>       

            <tr>
                <th>any</th> <th><img v-bind:src="require('../assets/' + minus)" /></th>
            </tr>

            <tr>
                <th>any</th> <th><img v-bind:src="require('../assets/' + minus)" /></th>
            </tr>    
        </tbody>
    </table>
</template>

<script>

export default{
    name:'DeleteProducts',
    data: function() {
        return {
        minus: "minus.png"
        };
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
    th{
        font-weight: normal;
    }
</style>
