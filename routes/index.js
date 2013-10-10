var about = require('./about');
var history = require('./history');
var f_fix = require('./f-fix');
var events = require('./events');
var contact = require('./contact');

module.exports = function(app){

	// home page
	app.get('/', function(req, res){
		res.render('home.jade', {pageTitle: 'Home'});
	});

	// about page
	about(app);

	// history page
	//history(app);

	// firsts fixtures page
	f_fix(app);

	// events page
	events(app);

	// contact page
	contact(app);
}