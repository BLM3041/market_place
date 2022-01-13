const express = require('express');
const router = express.Router();
const db = require('./db.js');
const add_product = `create or replace function add_product (name varchar(200), out productId int)
as $$
declare
    next_pid int;
begin
    next_pid := nextval('productid_seq');
    insert into product (id, product_name)
        values (next_pid, name);
    productId := next_pid;
exception
    when others then
        perform
            setval('productid_seq', next_pid, false);
    productId := - 1;
end;

$$
language 'plpgsql';`

// Add Product
router.post('/', async (req, res) => {
    try {
        const { product_name } = req.body;
        console.log(product_name);
        const newProduct = await db.func('add_product', [product_name, new Date()])
        res.json(newProduct);
    } catch (err) {
        console.error(err.message);
    }
});
module.exports = router;