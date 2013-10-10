
module.exports = function(app){

	// Firsts fixtures page
	app.get('/f-fix', function(req, res){
		res.render('f-fix.jade', {pageTitle: 'First Team Fixtures'});
	})
}