const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: '12345',
    database: 'market_place'
})
module.exports = pool;
