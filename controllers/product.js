'use strict'

const Product = require('../models/product')

function getProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if(!product) return res.status(404).send({message: `Error el producto no existe`})

    res.status(200).send({ product })
  })
}

function getProducts (req, res) {
  Product.find({"status":"A"}, (err, products) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
    if(!products) return res.status(404).send({message: `No existen productos`})

    res.status(200).send({ products })
  })
}

function saveProduct (req, res) {
  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()
  product.brand = req.body.brand
  product.name = req.body.name
  product.photo = req.body.photo
  product.description = req.body.description
  product.price = req.body.price
  product.quantity = req.body.quantity

  product.save((err, productStored) => {
    if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

    res.status(200).send({product: productStored})
  })
}

function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) =>{
    if(err) res.status(500).send({message: `Error al actualizar el producto ${err}`})

    res.status(200).send({ product: productUpdated})
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if(err) res.status(500).send({message: `Error al borrar el producto ${err}`})

    product.remove(err => {
      if(err) res.status(500).send({message: `Error al borrar el producto ${err}`})
      res.status(200).send({message: `El producto se ha sido eliminada`})
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
