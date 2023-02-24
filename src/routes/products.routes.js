import { Router } from "express";
import { getProducts } from "../controllers/products.controllers";

const router = Router()

router.get('/products', getProducts)

router.get('/products:id', getProducts)

router.post('/products',)

router.delete('/products', getProducts)

router.put('/products', getProducts)


export default router;