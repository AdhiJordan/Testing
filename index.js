const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*',  (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));      
	})
}

var server = app.listen(process.env.PORT || 9002, function () {
  var port = server.address().port;
  console.log("Express is working on port's " + port);
});