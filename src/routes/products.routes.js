import { Router } from "express";
import { CreateNewProducts, deleteProductsById, getProducts, getProductsById, getTotalProducts, updateProductsById } from "../controllers/products.controllers";

const router = Router()

router.get('/products', getProducts)

router.get('/products/count', getTotalProducts)

router.get('/products/:id', getProductsById)

router.post('/products', CreateNewProducts)

router.delete('/products/:id', deleteProductsById)

router.put('/products/:id', updateProductsById)


export default router;