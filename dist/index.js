"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const app = (0, express_1.default)();
const port = 5000;
//const addresses = [{id: 1, value: 'Minsk'}, {id: 2, title: 'Grodno'}]
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.use('/products', products_router_1.productsRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
