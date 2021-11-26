const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('./routes/routes.js');

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());



app.use(cors ({origin: 'http://localhost:4200' }));

app.listen(4000, () => console.log('Server started at port 3000'));

app.use('/', routes)