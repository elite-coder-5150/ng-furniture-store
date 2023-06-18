// @ts-ignore
import { db } from "../server";
export class ProductSearchController {
	async searchProducts(req, res) {
		const { query } = req.body;
		try {
			const sql = `select * from products where name like ?`;
			db.query(sql, [`%${query}%`], (err, result) => {
				if (err) {
					console.error(err);
					res.status(500).send("Internal Server Error");
				} else if (result.length === 0) {
					res.status(404).send("Not Found");
				} else {
					res.status(200).send(result);
				}
			});
		} catch (err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
		}
	}

	// what does the above method do?
	// it searches for products that match the query
	async searchProductsByCategory(req, res) {
		const { query, category } = req.body;
		try {
			const sql = `select * from products where name like ? and category = ?`;
			db.query(sql, [`%${query}%`, category], (err, result) => {
				if (err) {
					console.error(err);
					res.status(500).send("Internal Server Error");
				} else if (result.length === 0) {
					res.status(404).send("Not Found");
				} else {
					res.status(200).send(result);
				}
			});
		} catch (err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
		}
	}

	async searchProductsByPrice(req, res) {
		const { query, min, max } = req.body;
		try {
			const sql = `select * from products where name like ? and price between ? and ?`;
			db.query(sql, [`%${query}%`, min, max], (err, result) => {
				if (err) {
					console.error(err);
					res.status(500).send("Internal Server Error");
				} else if (result.length === 0) {
					res.status(404).send("Not Found");
				} else {
					res.status(200).send(result);
				}
			});
		} catch (err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
		}
	}

	async searchProductsById(req, res) {
		const { id } = req.body;
		try {
			const sql = `select * from products where id = ?`;
			db.query(sql, [id], (err, result) => {
				if (err) {
					console.error(err);
					res.status(500).send("Internal Server Error");
				} else if (result.length === 0) {
					res.status(404).send("Not Found");
				} else {
					res.status(200).send(result[0]);
				}
			});
		} catch (err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
		}
	}

}
