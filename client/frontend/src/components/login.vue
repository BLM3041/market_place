<template>
    <div class="login">    
        <form @submit.prevent="handleSubmit()">
            <select name="users" id="usertypes" v-model="users">
                <option value="state">State</option>
                <option value="seller">Seller</option>
            </select><br><br>
            <input type="text" id="username" name="username" placeholder="Username"  v-model="username" required><br>
            <input type="password" id="password" name="password" placeholder="Password" required v-model="password"><br><br>
            <input type="submit" value="Submit"  >
        </form>

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
    }
    select{
        width:170px;
        height: 20px;
    }
    body {
    display:flex;
    }
    form {
    display:table;/* shrinks to fit content */
    margin:auto;
    }

</style>
