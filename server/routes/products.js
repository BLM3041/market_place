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
7
    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


// Get all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM list_all_products ()");
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add a product
router.post('/', async (req, res) => {
  try {
    const { product_name } = req.body;
    console.log(product_name);
    const newProduct = await pool.query(
      `SELECT * from add_product($1)`,
      [product_name]);
    res.json(newProduct.rows[0]);
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
module.exports = router;