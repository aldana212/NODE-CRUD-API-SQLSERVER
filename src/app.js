import express from "express";
import config from './config'
import productsRoutes from "./routes/products.routes";


// ejecutamos express para configurar el servidor
const app = express();


//settings para congigurar el port
app.set('port', config.port)

app.use(productsRoutes)

export default app;
