// Date: 07/27/2021
// @ts-ignore
import { db } from '../server';
const nodemailer = require('nodemailer');
export class NewsletterController {
	async subscribe(req, res) {
		try {
			const { email } = req.body;
			const sql = `
				INSERT INTO newsletter_subscribers (email) VALUES (?)
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

	// q: can you explain to me what sendNewsletter does?
	// a: it sends a newsletter to all subscribers.
	async getAllSubscribers(req, res) {
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

}

