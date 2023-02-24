import { pool } from "mssql";
import { getConnection } from "../database/connection";


export const getProducts = async(req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Product')
    console.log(result)
    res.send(result)
}