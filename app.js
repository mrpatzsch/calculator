var express = require("express"),
	ejs = require("ejs"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

var calculations = [];

app.get('/', function(req, res) {
	res.render('index', { calculations: calculations });
});


app.post('/add', function(req, res) {
	var x = Number(req.body.add1);
	var y = Number(req.body.add2);
	var sum = x + y;
	calculations[0] = sum;
	res.redirect('/');
});

app.post('/subtract', function(req, res) {
	var x = Number(req.body.sub1);
	var y = Number(req.body.sub2);
	var sum = x - y;
	calculations[0] = sum;
	res.redirect('/');
});

app.post('/multiply', function(req, res) {
	var x = Number(req.body.mult1);
	var y = Number(req.body.mult2);
	var sum = x * y;
	calculations[0] = sum;
	res.redirect('/');
});

app.post('/divide', function(req, res) {
	var x = Number(req.body.div1);
	var y = Number(req.body.div2);
	var sum = x / y;
	calculations[0] = sum;
	res.redirect('/');
});



app.listen(3000);