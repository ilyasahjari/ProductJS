const express = require('express');
const router = express.Router();
const Products = require("../models/products");
const { response } = require('express');


router.get('/', (req, res) => {
    res.send("we are on posts")
})

router.post('/', (req, res) => {
    const post = new Products({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available: req.body.available
    });
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        });
    console.log(req.body);
})

module.exports = router;