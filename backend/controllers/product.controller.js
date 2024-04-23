const db = require('../db/db')


// query for creating a new row into products table
exports.createProduct = async (req, res, next) => {
    const { product_name, quantity, price } = req.body;

    const { rows } = await db.query("INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)", [product_name, quantity, price]);
    res.status(201).send({
        message: " New Product with quantity and price is created successfully!!",
        body: {
            product: { product_name, quantity, price }
        },
    });
};


// query for listing of all products stored in the database

exports.readProductList = async (req, res) => {
    const response = await db.query('SELECT * FROM products');
    res.status(200).send(response.rows);
};


// query for listing of product stored in the database using ID
exports.ProductByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM products WHERE productid = $1', [id]);
    res.status(200).send(response.rows);
};



// query to UPDATE the product stored in the database by using ID
exports.updateProductByID = async (req, res) => {
    const id = parseInt(req.params.id);

    const { product_name, quantity, price } = req.body;

    const response = await db.query("UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productid = $4", [product_name, quantity, price, id]);

    res.status(200).send({ message: "Product has been updated successfully!!" });
}


// query to DELETE the product stored in the database by using ID

exports.deleteProductByID = async (req, res) => {
    const id = parseInt(req.params.id);

    const response = await db.query('DELETE FROM products WHERE productid = $1', [id]);

    res.status(200).send({ message: "Product deleted successfully!!", id })
}