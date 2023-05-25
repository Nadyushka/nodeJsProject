import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/products-router";

const app = express()
const port = 5000


//const addresses = [{id: 1, value: 'Minsk'}, {id: 2, title: 'Grodno'}]

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})