const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();



// Get all stocks
router.get('/:sellerId/stocks', async (req, res) => {
  try {
    const { sellerId } = req.params;
    console.log(sellerId)
    const allStocks = await pool.query("SELECT * FROM list_stock ($1)",
    [sellerId]
    );
    //console.log(allStocks)
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
/**********************************************Check it ************************************************** */
/**Does not gþcew warning for negative senario */
router.post('/:sellerId/addStock', async (req, res) => {
  const { sellerId } = req.params;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  const price = req.body.price;
  console.log(req.body)
  try {
    const newStock = await pool.query(
      `SELECT * FROM add_stock ($1, $2, $3, $4)`,
      [sellerId, product_id, quantity, price ]);
    console.log( [newStock])
    res.status(200).json(`Product was successfully added`)
    /*new_id = [newStock.rows[0]['productid']]
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




// Delete a product from the stock
router.delete('/:sellerId/deleteFromStock', async (req, res) => {
  try {
    const { seller_id } = req.params;
    const { product_id } = req.body;
    const deleteFromStock = await pool.query("SELECT * FROM remove_stock ($1 , $2 ) ", [
      seller_id, product_id
    ]);
    const deleted = deleteFromStock.rows[0]
    console.log(deleteFromStock)
    res.status(200).json(`Product was successfully deleted from stock`);
    /*new_id = [deleteFromStock.rows[0]['productid']]
    if( new_id == -1){
        res.status(409).json("Product already exists")
    }
    else{
      res.status(200).json(`Product was successfully added with id: ${new_id}`);
    }*/
  } catch (err) {
    console.log(err.message);
  }
});




// Delete a product from the stock
router.put('/:sellerId/updateStock', async (req, res) => {
  try {
    const { seller_id } = req.params;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;
    const updateStock = await pool.query("SELECT * FROM update_quantity ($1 , $2, $3 ) ", [
      seller_id, product_id, quantity
    ]);
    console.log(updateStock)
    const result  = [updateStock.rows[0]['update_quantity']]
    if( result == -1){
        res.status(409).json("Product couldn't be updated ")
    }
    else{
      res.status(200).json(`Product was successfully updated`);
    }
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = router;