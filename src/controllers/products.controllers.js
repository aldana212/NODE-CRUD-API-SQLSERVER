import { getConnection, sql, querys } from "../database";

// exito
export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute(querys.getAllProduct)
        res.status(200).json({ data: result.recordset, msg: "Datos...."})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}
// exito
export const CreateNewProducts = async (req, res) => {
    try {
        const { name, descriptions} = req.body;
        let {quantity} = req.body;
        if (name == null || descriptions == null) {
            return res.status(400).json({
                message: 'llega los campos'
            })
        }
        if (quantity == null) quantity = 0;    
        const pool = await getConnection();
        const result = await pool.request()
        .input("nombre", sql.VarChar(50), name )
        .input("categoria", sql.Text, descriptions )
        .input("cantidad", sql.Int, quantity )
        .execute(querys.addNewProducts);
        console.log(result);
        res.status(200).json({ data: result.recordset, msg: "Inserto correctamente"})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}
// exito
export const getProductsById = async (req, res) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input("id_products", sql.Int , id)
        .execute(querys.getProductsById)
        res.status(200).json({ data: result.recordset, msg: "Tus datos"})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }

}
// exito
export const deleteProductsById = async (req, res) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input("id_products", sql.Int , id)
        .execute(querys.deleteProducs)
        res.status(200).json({ data: result.recordset, msg: "dato eliminado"})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }

}
// exito
export const getTotalProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute(querys.getTotalProducts)
        res.status(200).json({ data: result.recordset, msg: "cantidad de datos"})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }

}
// exito
export const updateProductsById = async (req, res) => {
    try {
        const { name, descriptions, Quantity} = req.body;
        const {id} = req.params;
        if (name == null || descriptions == null || Quantity == null) {
            return res.status(400).json({
                message: 'llega los campos'
            })
        }
        const pool = await getConnection();
        const result = await pool.request()
        .input("nombre", sql.VarChar(50), name )
        .input("categoria", sql.Text, descriptions )
        .input("cantidad", sql.Int, Quantity)
        .input("id_products", sql.Int , id)
        .execute( querys.updateProductById)
        res.status(200).json({ data: result.recordset, msg: "Inserto correctamente"})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}