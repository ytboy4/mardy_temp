
module.exports = function(app){

	// About page
	app.get('/contact', function(req, res){
		res.render('contact.jade', {pageTitle: 'Contact Us'});
	})
}