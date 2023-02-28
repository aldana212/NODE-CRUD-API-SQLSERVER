import { getConnection, querys } from "../database";

// exito
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
        let {quantity} = req.body;
        if (name == null || descriptions == null) {
            return res.status(400).json({
                message: 'llega los campos'
            })
        }
        if (quantity == null) quantity = 0;    
        const pool = await getConnection();
        const result = await pool.request()
        .query('INSERT INTO Product (Name, Description, Quantity) VALUES (?, ?, ?)', 
        [name, descriptions, quantity]);
        console.log(result);
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

export const deleteProductsById = async (req, res) => {
    try {
        const ID = req.params.id;
        const pool = getConnection();
        const result = await pool.request().query(querys.deleteProducs,{ID})
        res.status(200).json({ data: result.recordset, msg: "dato eliminado"})
    } catch (error) {
        res.status(500).json({
            error: error
        })
        
    }

}

export const getTotalProducts = async (req, res) => {
    try {
        const pool = getConnection();
        const result = await pool.request().query(querys.getTotalProducts)
        res.status(200).json({ data: result.recordset, msg: "cantidad de datos"})
    } catch (error) {
        res.status(500).json({
            error: error
        })
        
    }

}

export const updateProductsById = async (req, res) => {
    try {
        const { name, descriptions, Quantity} = req.body;
        const id = req.params.id;
        if (name == null || descriptions == null || Quantity == null) {
            return res.status(400).json({
                message: 'llega los campos'
            })
        }
        const pool = await getConnection();
        const result = await pool.request().query( querys.updateProductById, [{name, descriptions}, id])
        res.status(200).json({ data: result.recordset, msg: "Inserto correctamente"})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}