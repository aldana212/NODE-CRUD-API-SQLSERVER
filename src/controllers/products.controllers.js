import { getConnection, querys } from "../database";


export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllProduct)
        res.status(200).json({ data: result.recordset, msg: "Datos...."})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}


export const CreateNewProducts = async (req, res) => {
    try {
        const { name, descriptions} = req.body;
        let {Quantity } = req.body;
        if (name == null || descriptions == null) {
            return res.status(400).json({
                message: 'llega los campos'
            })
        }
        if (Quantity == null) Quantity = 0;    
        const pool = await getConnection();
        const result = await pool.request().query( querys.addNewProducts, {name, descriptions})
        res.status(200).json({ data: result.recordset, msg: "Inserto correctamente"})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}



export const getProductsById = async (req, res) => {
    try {
        const ID = req.params.id;
        const pool = getConnection();
        const result = await pool.request().query(querys.getProductsById,{ID})
        res.status(200).json({ data: result.recordset, msg: "Tus datos"})
    } catch (error) {
        res.status(500).json({
            error: error
        })
        
    }

}