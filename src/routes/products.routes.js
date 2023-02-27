import { Router } from "express";
import { CreateNewProducts, getProducts, getProductsById } from "../controllers/products.controllers";

const router = Router()

router.get('/products', getProducts)

router.get('/products:id', getProductsById)

router.post('/products', CreateNewProducts)

router.delete('/products', getProducts)

router.put('/products', getProducts)


export default router;