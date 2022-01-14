<template>
    <div class="container">
    <table className="table">
        <caption>Salesmen</caption>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Location</th>
        </tr>
        <tbody v-for = "seller in Allsellers" v-bind:key="seller.sellerid">
            <tr id ={{seller.sellerid}} >
                <td>{{seller.fname}}</td>
                <td>{{seller.lname}}</td> 
                <td>{{seller.loc}}</td>
                 <img v-bind:src="require('../assets/' + minus)" />
            </tr> 
             
        </tbody>
    </table>
    <button type="button" class="btn" @click="() => TogglePopup('buttonTrigger')" >Add Seller</button>
    <AddSellerPopUp 
			v-if="popupTriggers.buttonTrigger" 
			:TogglePopup="() => TogglePopup('buttonTrigger')">
	</AddSellerPopUp>
    </div>
</template>

<script>
import AddSellerPopUp from './AddSellerPopUp.vue';
import { ref } from 'vue';
export default{
    setup () {
		const popupTriggers = ref({
			buttonTrigger: false,
		});
		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}
		setTimeout(() => {
			popupTriggers.value.timedTrigger = true;
		}, 3000);
		return {
			AddSellerPopUp,
			popupTriggers,
			TogglePopup
		}
	},
    name:'SellerOperations',
    components: {AddSellerPopUp},
    data() {
        return {
        minus: "minus.png",
        Allsellers : []
        };
    },
  mounted() {
      fetch('http://localhost:5000/management/sellers')
        .then(res => res.json())
        .then( data => this.Allsellers = data )
        .catch( err => console.log(err.message))
       
  },
   
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
