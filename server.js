"use strict"
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var cors = require('cors');
var fm = require('front-matter');
var marked = require('marked');
var router = express.Router();   

app.use(cors());

app.use(express.static('public'))

var fullPath = [],  blog = null;

let logFinal = [];
var showData  = null;
var cssFileCount = 0;

var glob = require( 'glob' );  

glob( 'ClientApp/src/blogs/*.md', function( err, files ) {
   return cssFileCount = (files.length);
});


traverseDir('ClientApp/src/blogs');
 function traverseDir(dir) {
   fs.readdirSync(dir).forEach(file => {
     fullPath = path.join(dir, file);
          if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
            readFile(fullPath)
          } else {
            readFile(fullPath)
          }
   });
}

function readFile() {
  var md = require("markdown").markdown;
      fs.readFile(fullPath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            blog= fm(data);
            showData = (JSON.stringify(blog) + ',');
            setApi(showData);
        } else {
            console.log(err);
        }
    });
}

function setApi(data){
  var dataTest = data.substring(0, data.length - 1);
  logFinal.push(JSON.parse(dataTest));

  app.get('/api/listBlogs', function (req, res) {
     
    }) res.send(logFinal)
}


if(process.env.NODE_ENV === 'production') {
	app.use(express.static('public/build'));
	const path = require('path');
	app.get('*',  (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));      
	})
}

app.listen(1113, function(){
  console.log('app is listening on port 1113');
})