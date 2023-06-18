// Note: Products Controller
// Date: 04/18/2021
// @ts-ignore
import { db } from '../server';
export class ProductsController {
	async getAllProducts(req, res) {
		try {
			const sql = `
				SELECT * FROM products
			`;
			const [rows] = await db.query(sql);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Products not found' });
			}
			else {
				return res.status(200).json(rows);
			}
		}
		catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}

	// q: what does the above funnction do?
	// a: get all products from the database using a SQL query

	async getSingleProduct(req, res) {
		try {
			const { product_id } = req.params;
			const sql = `
				SELECT * FROM products WHERE product_id = ?
			`;
			// const [rows] = await db.query(sql, [product_id]);
			// if (rows.length === 0) {
			// 	return res.status(404).json({ message: 'Product not found' });
			// }
			// else {
			// 	return res.status(200).json(rows[0]);
			// }
			db.query(sql, [product_id], (err, rows) => {
				if (err) {
					return res.status(404).json({ message: 'Product not found' });
				}
				else {
					return res.status(200).json(rows[0]);
				}
			})
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}

	// q: what does the above funnction do?
	// a: get a single product from the database using a SQL query

	// q: based on this project size, how would you rate my code quality?
	// a: 7/10
	async getProductById(req, res) {
		try {
			const sql = `
				SELECT * FROM products WHERE product_id = ?
			`;
			const [rows] = await db.query(sql, [req.params.id]);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Product not found' });
			}
			else {
				return res.status(200).json(rows[0]);
			}
		}
		catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}

	async removeProduct(req, res) {
		try {
			const sql = `
				DELETE FROM products WHERE product_id = ?
			`;
			const [rows] = await db.query(sql, [req.params.id]);
			if (rows.affectedRows === 0) {
				return res.status(404).json({ message: 'Product not found' });
			}
			else {
				return res.status(204).json({ message: 'Product deleted' });
			}
		}
		catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}

	async createProduct(req, res) {
		try {
			const { name, description, price, category } = req.body;
			const sql = `
				INSERT INTO products (name, description, price, category) VALUES (?, ?, ?, ?)
			`;
			const [rows] = await db.query(sql, [name, description, price, category]);
			if (rows.affectedRows === 0) {
				return res.status(500).json({ message: 'Product not created' });
			}
			else {
				return res.status(201).json({ message: 'Product created' });
			}
		}
		catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}

	async updateProduct(req, res) {
		try {
			const { name, description, price, category } = req.body;
			const sql = `
				UPDATE products SET name = ?, description = ?, price = ?, category = ? WHERE product_id = ?
			`;
			const [rows] = await db.query(sql, [name, description, price, category, req.params.id]);
			if (rows.affectedRows === 0) {
				return res.status(404).json({ message: 'Product not found' });
			}
			else {
				return res.status(200).json({ message: 'Product updated' });
			}
		}
		catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}

	async productOnSale(req, res) {
		try {
			const sql = `
				SELECT * FROM products WHERE on_sale = ?
			`;
			const [rows] = await db.query(sql, [req.params.on_sale]);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Product not found' });
			}
			else {
				return res.status(200).json(rows);
			}
		}
		catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error', error });
		}
	}
}
