// Date: 07/27/2021
// @ts-ignore
import { db } from '../server';
export class NewsletterController {
	async getAllNewsletters(req, res) {
		try {
			const sql = `
				SELECT * FROM newsletter_subscribers
			`;
			const [rows] = await db.query(sql);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Newsletters not found' });
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
	async getNewsletterById(req, res) {
		try {
			const sql = `
				SELECT * FROM newsletter WHERE newsletter_id = ?
			`;
			const [rows] = await db.query(sql, [req.params.id]);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Newsletter not found' });
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
	async createNewsletter(req, res) {
		try {
			const { title, content, created_at, updated_at } = req.body;
			const sql = `
				INSERT INTO newsletter_subscribers (subscriber_id, email, created_at, updated_at)
				VALUES (?, ?, ?, ?)
			`;
			const [{ insertId }] = await db.query(sql, [title, content, created_at, updated_at]);
			const sql2 = `
				SELECT * FROM newsletter WHERE newsletter_id = ?
			`;
			const [rows] = await db.query(sql2, [insertId]);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Newsletter not found' });
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

	async unsubscribe(req, res) {
		try {
			const { email } = req.body;
			const sql = `
				DELETE FROM newsletter_subscribers WHERE email = ?
			`;
			const [rows] = await db.query(sql, [email]);
			if (rows.length === 0) {
				return res.status(404).json({ message: 'Newsletter not found' });
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

	// q: what does the above function do?
	// a: it deletes the email from the newsletter_subscribers table, effectively
	//    unsubscribing the user from the newsletter
}
