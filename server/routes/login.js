const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();
const bcrypt = require('bcryptjs')


router.post('/', async (req,res) =>{
    try{
        const { username, password} = req.body;

        /*Encrypt
            const hashed_password = await bcrypt.hash(password, 10);

        */

        const user = await pool.query(
            "SELECT * FROM mylogin($1, $2)", 
            [username.toLowerCase(), password]
          );
        const result = user.rows[0]['mylogin']
        if(result==-1){
            res.status(401).json("Login failed. Please check again your information")
        }
        else{
            res.status(200).json("Login successfully")
        }
       
    }
    catch(err){
        console.log(err.message)

    }
})


module.exports = router;