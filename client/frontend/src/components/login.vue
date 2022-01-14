<template>
    <div class="login">    
        <form>
            <select name="users" id="usertypes">
                <option value="state">State</option>
                <option value="seller">Seller</option>
            </select><br><br>
            <input type="text" id="username" name="username" placeholder="Username"><br>
            <input type="password" id="password" name="password" placeholder="Password"><br><br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login'
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
    

</style>
