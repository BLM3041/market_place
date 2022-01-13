const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();


router.post('/', async (req,res) =>{
    try{
        const { username, password} = req.body;
        const user = await pool.query(
            "SELECT * FROM mylogin($1, $2)", 
            [username.toLowerCase(), password]
          );
        console.log(user)
        res.json(user)
    }
    catch(err){
        console.log(err.message)

    }
})


module.exports = router;