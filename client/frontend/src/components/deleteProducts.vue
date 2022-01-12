<template>
    <table className="table">
        <caption>PRODUCTS</caption>
        <tbody>
            <tr>
                something some <img v-bind:src="require('../assets/' + minus)" />
            </tr>       

            <tr>
                Anysomething <img v-bind:src="require('../assets/' + minus)" />
            </tr>

            <tr>
                some <img v-bind:src="require('../assets/' + minus)" />
            </tr>    
        </tbody>
    </table>
</template>

<script>

export default{
    name:'deleteProducts',
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
</style>
