const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'apple'}]


export const productRepository = {
    findProduct(title: string | null | undefined) {
        if (title) {
            const selectedProduct = products
                .filter(p => p.title.indexOf(title) > -1)
            return selectedProduct
        } else {
            return products
        }
    },
    getProductById(productId: number) {
        return products.find(p => p.id == productId)
    },
    createNewProduct(title: string) {
        const newProduct = {
            id: +(new Date()),
            title
        }
        products.push(newProduct)
        return products
    },
    updateProductTitle(productId: number, title:string) {
        const selectedProduct = products.find(p => p.id == +req.params.productId)
        if (selectedProduct) {
            selectedProduct.title = title
            return products
        } else {
            return false
        }
    },
    deleteProduct(productId:number){
        if (productId) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === productId) {
                    products.splice(i, 1)
                    return true
                }
            }
        } else {
           return false
        }
    }
}
