const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();
const bcrypt = require('bcryptjs')


router.post('/', async (req,res) =>{
    try{
        console.log(req.body);
        const { username, password} = req.body;
        /*const pass1 = await bcrypt.hash("112233", 10)
        const pass2 = await bcrypt.hash("112233", 10)
        console.log(pass1)
        console.log(pass2)
        const hashed_password = await bcrypt.hash(password, 10);
        */
       const user = await pool.query(
            "SELECT * FROM mylogin($1, $2)", 
            [username.toLowerCase(), password]
          );
        console.log(user)
        const result = user.rows[0]['mylogin']
        if(result==-1){
            res.status(401).json({
                "test": "Login failed. Please check again your information",
                "seller_id": -1
            })
        }
        else{
            res.status(200).json({
                "test": "Login successfully",
                "seller_id": result
            })
        }
       
    }
    catch(err){
        console.log(err.message)

    }
})


module.exports = router;