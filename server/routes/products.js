const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();


//get a product

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query("SELECT * FROM list_one_product($1)", [
      id
    ]);
    const product_name = product.rows[0]['list_one_product'];
    if(product_name == null){
      res.status(404).json("Product was not found!");
    }
    else{
      res.status(200).json(product_name);
    }
   
  } catch (err) {
    console.error(err.message);
  }
});


// Get all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM list_all_products ()");
    res.status(200).json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add a product
router.post('/', async (req, res) => {
  try {
    const { product_name } = req.body;
    const newProduct = await pool.query(
      `SELECT * from add_product($1)`,
      [product_name.toLowerCase()]);
    console.log( [newProduct.rows[0]])
    new_id = [newProduct.rows[0]['productid']]
    if( new_id == -1){
        res.status(409).json("Product already exists")
    }
    else{
      res.status(200).json(`Product was successfully added with id: ${new_id}`);
    }
    
  } catch (err) {
    console.error(err.message);
  }
});



/*
// Delete Product
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query("DELETE FROM product WHERE id = $1", [
      id
    ]);
    res.json("Product was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


*/


// Get all stocks of a product 
router.get('/stocks/:id/', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const allProducts = await pool.query("SELECT * FROM list_product_stocks ($1)",[
      id
    ]);
    console.log(allProducts)
    res.status(200).json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;