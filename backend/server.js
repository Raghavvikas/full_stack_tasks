const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { pg } = require("./db/db");
const index = require("./routes/index")
const productRoute = require('./routes/product.routes')
const path = require("path");

// to start the server, instance of express has created
const app = express();


// PORT number of the server, where server is runing
const PORT = process.env.PORT || 8000;


// as a MIDDLEWARE, bodyparser is helpful to parse the data to frontend in JSON format.
app.use(bodyparser.json())

// CORS as middleware for cross-domain requests
app.use(cors({
    origin: 'http://localhost:3000'
}));


// create a default or home route
app.use(index)

// product routes
app.use('/backend/', productRoute)


// parse the data that goes out on the request object (for PUT & POST requests)
app.use(express.urlencoded({ extended: true }));

// expects data to be sent in JSON format
app.use(express.json());
app.use(express.json({ type: 'application/vnd.backend_task+json' }));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // runDataBase()
});






