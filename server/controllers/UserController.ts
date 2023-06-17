// @ts-ignore
import {db} from '../server';
export class UserController {
	async getAllUsers(req, res) {
		try {
			const sql = `
				SELECT * FROM users
			`
			const [rows] = await db.query(sql);
			if (rows.length === 0) {
				return res.status(404).json({message: 'Users not found'});
			} else {
				return res.status(200).json(rows);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({message: 'Internal server error', error})
		}
	}

	async getUserById(req, res) {
		try {
			const {id} = req.params;
			const sql = `
				SELECT * FROM users WHERE user_id = ?
			`
			const [rows] = await db.query(sql, [id]);
			if (rows.length === 0) {
				return res.status(404).json({message: 'User not found'});
			} else {
				return res.status(200).json(rows[0]);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({message: 'Internal server error', error})
		}
	}

	async getUser(req, res) {
		try {
			const sql = `
				SELECT user_name FROM users WHERE user_name = ?
			`
			const [rows] = await db.query(sql, [req.params.username]);
			if (rows.length === 0) {
				return res.status(404).json({message: 'User not found'});
			} else {
				return res.status(200).json(rows[0]);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({message: 'Internal server error', error})
		}
	}

	async createUser(req, res) {
		try {
			const { name, password, email, role, created_at, updated_at} = req.body;
			const sql = `

				INSERT INTO users (user_id, user_name, email, password, role, created_at, updated_at)
				VALUES (null, ?, ?, ?, ?, ?, ?)
			`
			const [rows] = await db.query(sql, [name, email, password, role, created_at, updated_at]);
			if (rows.length === 0) {
				return res.status(404).json({message: 'User not found'});
			} else {
				return res.status(200).json(rows[0]);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({message: 'Internal server error', error})
		}
	}

	async updateUser(req, res) {
		try {
			const { name, password, email, role, updated_at, id} = req.body;
			const sql = `
				UPDATE users SET user_name = ?, email = ?, password = ?, role = ?, updated_at = ?
				WHERE user_id = ?
			`
			const [rows] = await db.query(sql, [name, email, password, role, updated_at, id]);
			if (rows.length === 0) {
				return res.status(404).json({message: 'User not found'});
			} else {
				return res.status(200).json(rows[0]);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({message: 'Internal server error', error})
		}
	}

	async deleteUser(req, res) {
		try {
			const sql = `
				DELETE FROM users WHERE user_id = ?
			`
			const [rows] = await db.query(sql, [req.params.id]);
			if (rows.length === 0) {
				return res.status(404).json({message: 'User not found'});
			} else {
				return res.status(200).json(rows[0]);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({message: 'Internal server error', error})
		}
	}


}
