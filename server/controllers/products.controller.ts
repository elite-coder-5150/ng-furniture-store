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
}
