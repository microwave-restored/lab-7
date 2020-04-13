const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const initRouter = require('./routes');
const db = require('./db');

db.sync();

const app = express();

app.use(bodyParser.json());

initRouter(app);

listen(3000);
