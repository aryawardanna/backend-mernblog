const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const productsRoutes = require('./src/routes/products');

app.use(bodyParser.json()) // type JSON

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PACTH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/customer', productsRoutes)

// GET '/users' ==> [{name: prawito}]

app.listen(4000);