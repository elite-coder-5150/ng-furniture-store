const express = require('express');
const router = express.Router();

import {NewsletterController} from "../controllers/newsletter.controller";
const newsletterController = new NewsletterController();
router.post('/newsletter/subscribe', newsletterController.subscribe)
router.delete('/newsletter/subscriber/:email', newsletterController.unsubscribe)
