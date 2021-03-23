const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', (req, res)=> res.json({name:'sunjae'}));

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
  })

module.exports = app;
