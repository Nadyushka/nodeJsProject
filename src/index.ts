import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 5000

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'apple'}]
//const addresses = [{id: 1, value: 'Minsk'}, {id: 2, title: 'Grodno'}]

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title
        const selectedProduct = products.filter(p => p.title.indexOf(title) > -1)
        res.send(selectedProduct)
    } else {
        res.send(products)
    }
})
app.get('/products/:productId', (req: Request, res: Response) => {
    const selectedProduct = products.find(p => p.id == +req.params.productId)
    if (selectedProduct) {
        res.send(selectedProduct)
    } else {
        res.send(404)
    }
})
app.delete('/products/:productId', (req: Request, res: Response) => {
    if (req.params.productId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === +req.params.productId) {
                products.splice(i, 1)
                res.send(204)
                return
            }
        }
    } else {
        res.send(404)
    }
})
app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(products)
})
app.put('/products/:productId', (req: Request, res: Response) => {
    const selectedProduct = products.find(p => p.id == +req.params.productId)
    if (selectedProduct) {
        selectedProduct.title = req.body.title
        res.send(products)
    } else {
        res.send(404)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})