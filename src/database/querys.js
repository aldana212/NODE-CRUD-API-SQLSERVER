

export const querys = {
   getAllProduct: 'SELECT * FROM products',
   addNewProducts: 'INSERT INTO products (Name, Description) VALUES (?, ?)',
   getProductsById: 'SELECT * FROM products where = id = ?',
}