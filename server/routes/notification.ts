const express = require('express');
const router = express.Router();

import {NotificationsController} from "../controllers/notifications.controller";
const notificationsController = new NotificationsController();

router.get('/', notificationsController.getNotifications);
router.get('/notifications/count', notificationsController.getUnreadCount);
router.put('/notifications/:id', notificationsController.markAsRead);
router.put('/notifications/:id', notificationsController.markAllAsRead);
router.put('notification/notification/:id', notificationsController.turnOffSingleNotification);

// q; how can i use axios to grab the data from the database?
// a: use axios.get() and axios.post()

// q: is this the proper way to define routes?

module.exports = router;
