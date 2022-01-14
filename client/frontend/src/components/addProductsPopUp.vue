<template>
    <div class="popup">    
        <form class="popup-inner" @submit.prevent="handleSubmit()">
            <input type="text" id="name" name="name" placeholder="name" v-model="fname" required><br>
            <input type="text" id="surname" name="surname" placeholder="surname" v-model="surname" required><br>
            <input type="text" id="username" name="username" placeholder="username" v-model="username" required><br>
            <input type="text" id="password" name="password" placeholder="password" v-model="password" required><br>
            <input type="text" id="location" name="location" placeholder="location" v-model="loc" required><br>
            <input type="submit" class="popup-close" value="Submit" >
            <button type="button"  @click="TogglePopup()">Close</button>
        </form>
    </div> 
</template>

<script>
import axios from 'axios'

export default{
    name:'AddProductPopUp',
    props: ['TogglePopup'],
    data(){
        return{
            username: "",
            password: "",
            loc: null,
            fname: "", 
            surname: ""
        }
    },
     methods: {
      async handleSubmit(){
         
          const data = {
              username : this.username,
              password : this.password,
              loc: this.loc,
              fname: this.fname, 
              surname: this.surname

          }
          console.log(data)
            await axios.post("http://localhost:5000/management/sellers", data)
            .then(res => {
                console.log(res)
                let seller_id = res.data.seller_id 
                if ( seller_id!= -1){
                    console.log("Successfully Added");

                }
                else{
                    alert(res.data.message)
                }
            })
            .catch(err => {
                console.log(err.message);
            })
      }
  },
}


/**.addForm{
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
    } */
</script>

<style scoped>
    
    .popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(255, 255, 255, 0.2);
	height: 100%;
    width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	
}
</style>
