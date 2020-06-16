var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors check
app.use(function(req, res, next) {
	res.header(
		'Access-Control-Allow-Methods',
		'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	next();
});
var routes = require('./routes/routes.js')(app);

var server = app.listen(8080, function() {
	console.log('Listening on port %s...', server.address().port);
});
