const express = require('express')
const app   = express()
const path = require('path')

const logger   =  require('morgan')
const productRouter = require('./app/products/router')
const productRouterV2 = require('./app/products_v2/router')
const port  = 3000


// logger
app.use(logger('dev'))

//encoded
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// static files
app.use( '/public',express.static( path.join(__dirname, 'uploads')))

// productRouter 
app.use('/api/v1', productRouter)

// productRouterV2
app.use('/api/v2', productRouterV2)

// error handle
app.use((req,res)=>{
    res.status(404)
    res.send('tidak ada')
})




app.listen(port, console.log('server listening in http://localhost:3000'))