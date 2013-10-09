
module.exports = function(app){

	// About page
	app.get('/about', function(req, res){
		res.render('about.jade', {pageTitle: 'About'});
	})
}