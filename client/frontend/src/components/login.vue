<template>
    <div class="login" :style="{'background-image': 'url(' + require('../assets/' + background) + ')'}">
        <div class="container">    
        <form @submit.prevent="handleSubmit()">
            <select name="users" id="usertypes" v-model="users" required>
                <option value="state">State</option>
                <option value="seller">Seller</option>
            </select><br><br>
            <input type="text" id="username" name="username" placeholder="Username"  v-model="username" required><br>
            <input type="password" id="password" name="password" placeholder="Password" required v-model="password"><br><br>
            <input type="submit" id="submit" value="Log in"  >
        </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data(){
      return{
          users: '',
          username: '',
          password: '',
          background: 'background.png'
      }
  },
  methods: {
      async handleSubmit(){

          const data = {
              username : this.username,
              password : this.password

          }
          console.log(data)
          
          if(this.users == 'state'){
              console.log("Belediyem")
            if(data.username == 'postgres' && data.password == '12345'){
                console.log("will be routed")
                window.location.href = "http://localhost:8080/management";
            }
            else{
                 alert("Wrong password or username! please try again ")
            }
          }
          else{
            await axios.post("http://localhost:5000/login", data)
            .then(res => {
                console.log(res)
                let seller_id = res.data.seller_id 
                if ( seller_id!= -1){
                    console.log("Successed");
                     window.location.href = "http://localhost:8080/sellers";
                }
                else{
                    alert("Wrong password or username! please try again ")
                }
            })
            .catch(err => {
                console.log(err.message);
                alert("Wrong password or username! please try again ")
            })
          }
      }
  },

}
</script>
<style scoped>
    .login{
        margin: 0px;
        height: 100%;
        width: 100%;
        background-size: cover;
    }
    #submit{
        border-radius: 10%;
        margin-left:55px;
        height: 30px;
        font-size: 15px;
    }
    #submit:hover{
        cursor: pointer;
    }
    select{
        width:170px;
        height: 20px;
    }
    body {
    display:flex;
    }
    .container{
    margin:auto;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 380px;
    height: 330px;
    background-color: rgb(141, 177, 182);
    border-radius: 10%;
    opacity:0.8;
    }
    form{
        position: relative;
        top: 80px;
        left: 105px;
    }
    input{
        margin-bottom: 10px;
    }

</style>
