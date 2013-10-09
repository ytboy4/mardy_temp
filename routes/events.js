
module.exports = function(app){

	// About page
	app.get('/events', function(req, res){
		res.render('events.jade', {pageTitle: 'Events'});
	})
}