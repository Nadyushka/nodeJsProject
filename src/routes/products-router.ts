import {Request, Response, Router} from "express";
import {productRepository} from "../repositories/product-repository";
import {body, validationResult} from "express-validator"
import {inputValidationMiddleware} from "../middlewaries/input-validation-middleware";

export const productsRouter = Router({})

const titleValidation = body('title').trim().isLength({
    min: 3,
    max: 10
}).withMessage('Title length should be from 3 to 10 symbols')


productsRouter.get('/',  async (req: Request, res: Response) => {
    const foundProducts = await productRepository.findProduct(req.query.title?.toString())
    res.send(foundProducts)
})
productsRouter.get('/:productId', async (req: Request, res: Response) => {
    const selectedProduct = await productRepository.getProductById(+req.params.productId)
    if (selectedProduct) {
        res.send(selectedProduct)
    } else {
        res.send(404)
    }
})
productsRouter.post('/', async (req: Request, res: Response) => {
    titleValidation;
    inputValidationMiddleware;


    const products = await productRepository.createNewProduct(req.body.title)
    res.status(201).send(products)
})
productsRouter.put('/:productId', async (req: Request, res: Response) => {
    titleValidation;
    inputValidationMiddleware;
    const updateProduct = await productRepository.updateProductTitle(+req.params.productId, req.body.title)
    if (updateProduct) {
        res.send(updateProduct)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:productId', async (req: Request, res: Response) => {
    const isDeleted = await productRepository.deleteProduct(+req.params.productId)
    isDeleted ? res.send(204) : res.send(404)

})