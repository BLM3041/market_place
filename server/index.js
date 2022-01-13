//Modules and libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./config/db_config');
const path = require('path');

//The routes
const products = require('./routes/products');
const sellers = require('./routes/sellers');
const login = require('./routes/login');
const management = require('./routes/management');
const browse = require('./routes/browse.js')

//Express and Configuration
const app = express();
let PARENT_DIR = path.parse(path.resolve(__dirname, '../')).name; 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*Routing*/

app.use('/products', products);
app.use('/sellers', sellers);
app.use('/management', management);
app.use('/login', login);
app.use('/browse', browse);

// simple routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to marketplace application." });
});



// Middlewares for Vue
let PUBLIC_DIR = path.join(PARENT_DIR, '/client/frontend/public') 
app.use(express.static(PUBLIC_DIR));

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

