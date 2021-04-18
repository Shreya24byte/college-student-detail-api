const express = require('express');
const mongoose = require('mongoose');

//make a connection to remote mongo db server
mongoose.connect('mongodb+srv://shreya_24:Basketball8@cluster0.73hat.mongodb.net/studentDB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }, function(err){
        if(err){
            console.log("Error in connection", err);
        } else {
            console.log("connection to db complete");
        }
    });
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentRouter = require('./routes/student');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);

module.exports = app;
