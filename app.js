const express = require('express');
const lessMiddleware = require('less-middleware');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(lessMiddleware(__dirname + "/public"));
app.use(express.static(__dirname + '/public')); // // This is to serve static files like .css and .js, images, fonts in the assets folder
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/' ,(req, res) => {
	res.render('index');
});


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});