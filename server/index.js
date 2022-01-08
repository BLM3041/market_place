const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./config/db_config');
//The routes
const products = require('./routes/products');
const stocks = require('./routes/stocks');
const management = require('./routes/management');


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/products', products);
app.use('/stocks', stocks);
app.use('/management', management);


// simple routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to marketplace application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

