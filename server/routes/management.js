const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();
const bcrypt = require('bcryptjs')

//Get a seller

router.get("/sellers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const seller = await pool.query("SELECT * FROM seller WHERE id = $1", [
      id
    ]);
    if(seller.rowCount){
      res.json(seller.rows[0]);
    }
    else{
      res.status(404).json(`Seller with id = ${id} could not be found`);
    }
  } catch (err) {
    console.error(err.message);
  }
});


// Get all sellers
router.get('/sellers/', async (req, res) => {
  try {
    const allSellers = await pool.query("SELECT * FROM list_sellers()");
    res.json(allSellers.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// Get all locations
router.get('/locations/', async (req, res) => {
  try {
    const allLocaitons = await pool.query("SELECT * FROM list_available_loc()");
    res.json(allLocaitons.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add a seller (user)
router.post('/sellers/', async (req, res) => {
  try {
    const { username, password, loc, fname, surname } = req.body;
    // Encypt the password: 
    //const hashed_password = await bcrypt.hash(password, 10);
    const newSeller = await pool.query(
      "SELECT * FROM add_user($1, $2, $3 , $4, $5)", 
      [username.toLowerCase(), password, loc, fname.toLowerCase() , surname.toLowerCase()]
    );
    console.log(newSeller)
    const result = newSeller.rows[0]['add_user'] 
    if(result == -1){
      res.status(409).json("username already exists or location reserved")
    }
    else{
      res.status(200).json("User was successfully added")
    }
  } catch (err) {
    console.error(err.message);
  }
});

// Delete Seller
router.delete('/sellers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSeller = await pool.query(" SELECT * FROM remove_user ($1) ", [
      id
    ]);
    const result= deleteSeller.rows[0]['remove_user']
    if(result == -1){
      res.status(404).json("This user does not exist")
    }
    else{
      res.status(200).json("User was successfully deleted")
    }
  } catch (err) {
    console.log(err.message);
  }
});

//Get a user
router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM market_user WHERE seller_id = $1", [
      id
    ]);
    if(user.rowCount){
      res.json(user.rows[0]);
    }
    else{
      res.status(404).json(`Seller with id = ${id} could not be found`);
    }
  } catch (err) {
    console.error(err.message);
  }
});
// Get all market_user
router.get('/users/', async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM market_user");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});





module.exports = router;