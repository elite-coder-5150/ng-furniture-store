// @ts-ignore
import { db } from "../server";
export class NotificationsController {
	async getNotifications(req, res) {
		const { id, created_at } = req.body;
		try {
			const sql = `select * from notifications where user_id = ? order by created_at desc`;
			db.query(sql, [id], (err, result) => {
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

	async getUnreadCount(req, res) {
		const { id } = req.body;
		try {
			const sql = `select count(*) as count from notifications where user_id = ? and is_read = 0`;
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

	async markAsRead(req, res) {
		const { id } = req.body;
		try {
			const sql = `update notifications set is_read = 1 where notification_id = ?`;
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

	async markAllAsRead(req, res) {
		const { id } = req.body;
		try {
			const sql = `update notifications set is_read = 1 where user_id = ?`;
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

	async turnOffSingleNotification(req, res) {
		const { id } = req.body;
		try {
			const sql = `update notifications set is_active = 0 where notification_id = ?`;
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
