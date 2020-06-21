const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

const productRoute= require('./routes/products');

app.use('/products', productRoute);


//Routes
app.get('/', (req, res) => {
    res.send("we are on home")
})



// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true ,useUnifiedTopology: true }, () =>
    console.log("connected to DB!")
)


app.listen(3000);

