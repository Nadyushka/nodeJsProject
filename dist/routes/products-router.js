"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
exports.productsRouter = (0, express_1.Router)({});
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'apple' }];
exports.productsRouter.get('/', (req, res) => {
    if (req.query.title) {
        const title = req.query.title;
        const selectedProduct = products.filter(p => p.title.indexOf(title) > -1);
        res.send(selectedProduct);
    }
    else {
        res.send(products);
    }
});
exports.productsRouter.get('/:productId', (req, res) => {
    const selectedProduct = products.find(p => p.id == +req.params.productId);
    if (selectedProduct) {
        res.send(selectedProduct);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.post('/', (req, res) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    };
    products.push(newProduct);
    res.status(201).send(products);
});
exports.productsRouter.put('/:productId', (req, res) => {
    const selectedProduct = products.find(p => p.id == +req.params.productId);
    if (selectedProduct) {
        selectedProduct.title = req.body.title;
        res.send(products);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.delete('/:productId', (req, res) => {
    if (req.params.productId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === +req.params.productId) {
                products.splice(i, 1);
                res.send(204);
                return;
            }
        }
    }
    else {
        res.send(404);
    }
});
