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
/**Does not give warning for negative senario */
router.post('/:sellerId/addStock', async (req, res) => {
  const sellerId = req.params.sellerId;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  const price = req.body.price;
  console.log(sellerId, product_id,quantity,price )
  try {
    const newStock = await pool.query(
      `SELECT * FROM add_stock ($1, $2, $3, $4)`,
      [sellerId, product_id, quantity, price ]);
    console.log( [newStock])
    res.status(200).json({product:  [newStock.rows[0]['productid']],
  message: `Product was successfully added`})
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
router.post('/:sellerId/deleteFromStock', async (req, res) => {
  try {
    const  seller_id = req.params.sellerId;
    const product_id = req.body.product_id;
    console.log(seller_id, product_id)
    const deleteFromStock = await pool.query("SELECT * FROM remove_stock ($1 , $2 ) ", [
      seller_id, product_id
    ]);
    console.log(deleteFromStock)
    res.status(200).json(`Product was successfully deleted from stock`);
    new_id = [deleteFromStock.rows[0]['remove_stock']]
    if( new_id == -1){
        res.status(409).json({deleted: new_id, message: "Product could not be deleted"})
    }
    else{
      res.status(200).json({deleted: new_id, message: "Product was successfully deleted"});
    }
  } catch (err) {
    console.log(err.message);
  }
});




// Update a product in the stock
router.post('/:sellerId/updateStock', async (req, res) => {
  try {
    const seller_id = req.body.sellerId;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;
    console.log(req.body)
    console.log(seller_id)
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


// Get reports
router.post('/:sellerId/reports/', async (req, res) => {
  try {
    const seller_id = req.params.sellerId;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    console.log(req)
    const reports = await pool.query("SELECT * FROM list_sales_usr($1,$2 ,$3)", 
    [seller_id, startDate, endDate]);
    res.json(reports.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//Sell something
router.post('/:sellerId/sell/', async (req, res) => {
  try {
    const sellerId = req.body.sellerId;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;
    const sold = await pool.query("SELECT * FROM sell($1,$2,$3)", 
    [sellerId, product_id, quantity]);
    console.log(sold)
    const result  = [sold.rows[0]['sell']]
    if(result == -1){
      res.status(409).json({sold_id : result , message: "Stock is dropped under zero"})
    }
    else{
      res.status(200).json({sold_id : result , message: "Product was successfully updated"})
    }
    res.json(sold.rows);

  } catch (err) {
    console.error(err.message);
  }
});




module.exports = router;