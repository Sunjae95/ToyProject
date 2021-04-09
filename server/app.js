const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const loginRouter = require('./routes/login');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api/login', loginRouter);

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
  })

module.exports = app;
