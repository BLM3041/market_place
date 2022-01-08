const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();


//get a product

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query("SELECT * FROM product WHERE id = $1", [
      id
    ]);

    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// Get all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM product");
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add Product
router.post('/', async (req, res) => {
  try {
    const { description } = req.body;
    const newProduct = await pool.query(
      "INSERT INTO product (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

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

module.exports = router;