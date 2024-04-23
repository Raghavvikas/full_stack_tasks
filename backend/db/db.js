const { Pool } = require('pg');
const dotenv = require('dotenv');


// config the dotenv variable to be at the middle of the connection path
dotenv.config()


// Configuration for POST GRESQL Server using POOL Method
const pg = new Pool({
    connectionString: process.env.DATABASE_URL
});


// after configuring the database connection, start the coonection with postgresql database

pg.on('connect', () => {
    console.log('DATABASE CONNECTION STARTED!!')
})

module.exports = { query: (text, params) => pg.query(text, params) };