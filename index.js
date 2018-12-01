const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var fm = require('front-matter');
var marked = require('marked');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let blogFolderPath = [], blog = null;
let blogList = [];

traverseDir('client/src/blogs');

function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    blogFolderPath = path.join(dir, file);
    if (fs.lstatSync(blogFolderPath).isDirectory()) {
      traverseDir(blogFolderPath);
      readFile(blogFolderPath)
    } else {
      readFile(blogFolderPath)
    }
  });
}

function readFile() {
  var md = require("markdown").markdown;
  fs.readFile(blogFolderPath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      blog = fm(data);
      let showData = (JSON.stringify(blog) + ',');
      setApi(showData);
    } else {
      console.log(err);
    }
  });
}

function setApi(data) {
  let dataTest = data.substring(0, data.length - 1);
  blogList.push(JSON.parse(dataTest));

  app.get('/api/blogs', function (req, res) {
    res.send(blogList)
  })
}

	app.use(express.static('client/build'));
	app.get('*',  (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));      
	})

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('static/build'));
	const path = require('path');
	app.get('*',  (req, res) => {
		res.sendFile(path.resolve(__dirname, 'static', 'build', 'index.html'));      
	})
}

var server = app.listen(process.env.PORT || 9004, function () {
  var port = server.address().port;
  console.log("Express is working on port's " + port);
});