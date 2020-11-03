const express = require('express')
const products = require('./products')


const app = express()

app.get('/', (req, res) => {
    res.send('server is running')
})



app.get('/api/products', (req, res) => {
    res.json(products)
})


app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})


app.listen(5001, console.log("app running on PORT 5000"))