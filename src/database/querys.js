

export const querys = {
   getAllProduct: 'SELECT * FROM Product',
   addNewProducts: 'INSERT INTO Product(Name, Description, Quantity) VALUES (?, ?, ?)',
   getProductsById: 'SELECT * FROM products where = id = ?',
   deleteProducs: 'DELETE FROM products where = id = ?',
   getTotalProducts: 'SELECT COUNT(*) FROM products',
   updateProductById: 'UPDATE products SET name = ?, description = ?, quantity = ? WHERE id = ?',
}