import express from "express";
import config from './config'
import productsRoutes from "./routes/products.routes";


// ejecutamos express para configurar el servidor
const app = express();


//settings para congigurar el port
app.set('port', config.port)
// middleware 
app.use(express.json())
app.use(express.urlencoded({extends: false}))

app.use(productsRoutes)

export default app;
