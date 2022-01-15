<template>
    <div class="container">
    <table className="table">
        <caption>Sellers</caption>
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
                <td @click="DeleteSeller(seller.sellerid)" > <img v-bind:src="require('../assets/' + minus)" /> </td>
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
import axios from 'axios';
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
  methods: {
      DeleteSeller(sellerid){
          console.log(sellerid)
          axios.delete(`http://localhost:5000/management/sellers/${sellerid}`)
          .then(res => {
              console.log(res)
              let seller_id = res.data.seller_id
              if ( seller_id!= -1){
                    console.log("Successfully Removed");
                    alert("User was successfully removed");
                    location.reload();
                }
                else{
                    alert("User does not exist! please try again ")
                    alert(res.data.message)
                }
          }
           

          )
          .catch(err => console.log(err.message))
      }
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
        background-color: rgb(123, 123, 241);
        color: white;
        border-radius: 10%;
    }
    button:hover{
        cursor: pointer;
    }
</style>
