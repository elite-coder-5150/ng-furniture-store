// @ts-ignore
import {mysql} from 'mysql';
const express = require('express');
const app = express();

require('dotenv').config();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'furniture_shop'
});

// setup the routes
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/notification'));
app.use('/api', require('./routes/newsletter'));
app.use('/api', require('./routes/product'));
app.use('/api', require('./routes/order'));
module.exports = db;
