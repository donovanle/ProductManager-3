const { product } = require("./../models/products.model");

module.exports.oneProduct = (req, res) => {
    const id = req.params.id
    product.findOne({_id: id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}


module.exports.allProducts = (req, res) => {
    product.find({})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

module.exports.updateProduct = (req, res) => {
    product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(res => res.json(res))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteProduct = (req, res) => {
    product.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}