var express = require('express');
//var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);
//API'S
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/sample');
// //mongoose.connect('mongodb://localhost:27017/books');

// var Datum = require('./models/data.js');

// //POST_DATA_API

// app.post('/data', function(req, res) {
//   var data = req.body;
//   Datum.create(data, function(err, dataum){
//     if(err){
//       throw err;
//     }
//     res.json(dataum);
//   })
// });


// //GET_DATA_API
// app.get('/data', function (req, res) {
//   Datum.find(function (err, datas) {
//     if(err){
//       throw err;
//     }
//     res.json(datas);
//   })
// });

// //DELETE_DATA_API

// app.delete('/data/:_id', function(req, res) {
//   var query = {_id: req.params._id};
//   Datum.remove(query, function(err, dataRemove) {
//     if(err){
//       throw err;
//     }
//     res.json(dataRemove);
//   })
// });

// //UPDATE_DATA_API


// app.put('/data/:_id', function(req, res) {

//   var dataGet = req.body;
//   var queryId = dataGet._id;
//   var updateData = {
//     '$set': {
//       title: dataGet.title 
//     }
//   };
//   var options= {new: true};
//   Datum.findOneAndUpdate({_id: queryId}, updateData, options, function(err, dataUpdateValue) {
//     if(err){
//       throw err;
//     }
//     res.json(dataUpdateValue);
//   })
// });


//end api's
app.listen(1339, function(err) {
  if(err){
    return console.log("err", err);
  }
  console.log("APP API SERVER IS RUNNING IN PORT 1339");
})

// app.get('*', function(req, res){
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// });

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;