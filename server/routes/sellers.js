const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();



// Get all stocks
router.get('/:sellerId/stocks', async (req, res) => {
  try {
    const { sellerId } = req.params;
    const allStocks = await pool.query("SELECT * FROM list_stock ($1)",
    [sellerId]
    );
    console.log(allStocks)
    res.status(200).json(allStocks.rows);
  } catch (err) {
    console.error(err.message);
  }
});



// Get all products not in the stock
router.get('/:sellerId/productsNotInStock', async (req, res) => {
  try {
    const { sellerId } = req.params;
    const ProductsNotInStocks = await pool.query("SELECT * FROM list_products_not_in_stock ($1)",
    [sellerId]
    );
    console.log(ProductsNotInStocks)
    res.status(200).json(ProductsNotInStocks.rows);
  } catch (err) {
    console.error(err.message);
  }
});



// Add a new product to the stock
router.post('/:sellerId/addStock', async (req, res) => {
  const { sellerId } = req.params;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  const price = req.body.price;
  try {
    const newStock = await pool.query(
      `SELECT * from add_stock ($1, $2, $3, $4)`,
      [sellerId, product_id, quantity, price ]);
    console.log( [newStock.rows[0]])
    res.status(200).json(`Product was successfully added with id: ${new_id}`);
    /*
    new_id = [newStock.rows[0]['productid']]
    if( new_id == -1){
        res.status(409).json("Product already exists")
    }
    else{
      res.status(200).json(`Product was successfully added with id: ${new_id}`);
    }*/
    
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