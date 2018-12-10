const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var fm = require('front-matter');
var marked = require('marked');
var cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', cors()); 


app.use(function(req, res, next) {
	var allowedOrigins = ['https://leadiq-new.azurewebsites.net','http://127.0.0.1:9006', 'http://localhost:9006', 'http://127.0.0.1:3000', 'http://localhost:3000'];
	var origin = req.headers.origin;
	if(allowedOrigins.indexOf(origin) > -1){
	    res.setHeader('Access-Control-Allow-Origin', origin);
	}
	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', true);
	return next();
});

let blogFolderPath = [], blog = null;
let blogList = [];

let podcastFolderPath = [], podcast = null, podcastList = [];

traverseDir('client/src/blogs');
traversePodcastDir('client/src/podcasts');

function traverseDir(dir) {
 	fs.readdirSync(dir).forEach(file => {
    blogFolderPath = path.join(dir, file);
	    if (fs.lstatSync(blogFolderPath).isDirectory()) {
	        traverseDir(blogFolderPath);
	    } else {
			readFile(blogFolderPath)
	    }
    });
}

function readFile(blogFolderPath) {
	var md = require("markdown").markdown;
	fs.readFile(blogFolderPath, { encoding: 'utf-8' }, function (err, data) {
	    if (!err) {
		    blog = fm(data);
		    blog.attributes.url = blogFolderPath;
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
}

if(blogList){
    app.get('/api/blogs', function (req, res) {
    	res.send( blogList );
	})
}

function traversePodcastDir(dir) {
 	fs.readdirSync(dir).forEach(file => {
    podcastFolderPath = path.join(dir, file);
	    if (fs.lstatSync(podcastFolderPath).isDirectory()) {
	        traversePodcastDir(podcastFolderPath);
	    } else {
			readFilePodcast(podcastFolderPath)
	    }
    });
}

function readFilePodcast(podcastFolderPath) {
	var md = require("markdown").markdown;
	fs.readFile(podcastFolderPath, { encoding: 'utf-8' }, function (err, data) {
	    if (!err) {
		    podcast = fm(data);
		    podcast.attributes.url = podcastFolderPath;
		    let showData = (JSON.stringify(podcast) + ',');
		    setApiPodcast(showData);
	    } else {
	    	console.log(err);
	    }
 	});
}

function setApiPodcast(data) {
	let dataTest = data.substring(0, data.length - 1);
	podcastList.push(JSON.parse(dataTest));
}

if(podcastList){
    app.get('/api/podcasts', function (req, res) {
    	res.send( podcastList );
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

    let blogFolderPath = [], blog = null;
    let blogList = [];
	let podcastFolderPath = [], podcast = null, podcastList = [];

    traverseDir('static/media');
    traversePodcastDir('static/media');

    function traverseDir(dir) {
      fs.readdirSync(dir).forEach(file => {
        blogFolderPath = path.join(dir, file);
        if (fs.lstatSync(blogFolderPath).isDirectory()) {
          traverseDir(blogFolderPath);
          //readFile(blogFolderPath)
        } else {
          readFile(blogFolderPath)
        }
      });
    }

    function readFile(blogFolderPath) {
      var md = require("markdown").markdown;
      fs.readFile(blogFolderPath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
          blog = fm(data);
          blog.attributes.url = blogFolderPath;
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
	}

	if(blogList){
	        app.get('/api/blogs', function (req, res) {
	        res.send( blogList );
	    })
	}

function traversePodcastDir(dir) {
 	fs.readdirSync(dir).forEach(file => {
    podcastFolderPath = path.join(dir, file);
	    if (fs.lstatSync(podcastFolderPath).isDirectory()) {
	        traversePodcastDir(podcastFolderPath);
	    } else {
			readFilePodcast(podcastFolderPath)
	    }
    });
}

function readFilePodcast(podcastFolderPath) {
	var md = require("markdown").markdown;
	fs.readFile(podcastFolderPath, { encoding: 'utf-8' }, function (err, data) {
	    if (!err) {
		    podcast = fm(data);
		    podcast.attributes.url = podcastFolderPath;
		    let showData = (JSON.stringify(podcast) + ',');
		    setApiPodcast(showData);
	    } else {
	    	console.log(err);
	    }
 	});
}

function setApiPodcast(data) {
	let dataTest = data.substring(0, data.length - 1);
	podcastList.push(JSON.parse(dataTest));
}

if(podcastList){
    app.get('/api/podcasts', function (req, res) {
    	res.send( podcastList );
	})
}

}

var server = app.listen(process.env.PORT || 9006, function () {
 var port = server.address().port;
 console.log("Express is working on port's " + port);
});