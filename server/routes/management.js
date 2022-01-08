const express = require('express');
const pool = require("../config/db_config");
const router = express.Router();


//get a seller

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const seller = await pool.query("SELECT * FROM seller WHERE id = $1", [
      id
    ]);

    res.json(seller.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// Get all sellers
router.get('/', async (req, res) => {
  try {
    const allSellers = await pool.query("SELECT * FROM seller");
    res.json(allSellers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add seller
router.post('/', async (req, res) => {
  try {
    const { description } = req.body;
    const newSeller = await pool.query(
      "INSERT INTO seller (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newSeller.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Delete Seller
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSeller = await pool.query("DELETE FROM seller WHERE id = $1", [
      id
    ]);
    res.json("seller was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;