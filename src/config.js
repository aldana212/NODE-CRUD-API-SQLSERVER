
// funcion congif cuando se ejecuta va a intentar leer las variables de entorno que esten definidas
import { config } from "dotenv";
config();


export default{
    port: process.env.PORT || 3000
}