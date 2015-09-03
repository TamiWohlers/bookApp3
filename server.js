
//Modules
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
//initiate app
var app = express();
//middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Public'));
app.use(cors());
app.use(session({secret: 'I still miss Ian'}));
app.use(passport.initialize());
app.use(passport.session());



passport.use(new FacebookStrategy({
	clientID: '516524848505535',
	clientSecret: '1fabf88183260067d4718ec3d8b9f3e9',
	callbackURL: 'http://localhost:8080/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
	console.log(profile);
	// var req.body.displayName = profile.displayName;
	// var req.body.facebookId = profile.id;
	// userCtrl.create(req);
	return done(null, profile)
}));

//port




//controllers
var bookCtrl = require('./backEndControllers/bookCtrl');
var userCtrl = require('./backEndControllers/userCtrl');
var cartCtrl = require('./backEndControllers/cartCtrl');
// var readCtrl = require('./backEndControllers/readCtrl');
// var orderCtrl = require('./controllers/orderCtrl')
passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});




//endpoints
// 
app.get("/auth/facebook/", passport.authenticate("facebook", 
{

}));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
	// app.post('/api/users', userCtrl.create);
	successRedirect:'/#/home',
	failureRedirect: '/login'
}));
// app.get('/api/userName', bookCtrl.getId);
app.post('/api/books', bookCtrl.create);
app.post('/api/users', userCtrl.create);
app.post('/api/carts', cartCtrl.create);	
app.get( '/api/books',bookCtrl.read);
app.get('/api/carts/book/:id', cartCtrl.read);
app.get('/api/carts/all', cartCtrl.readAll);	
app.get('/api/books/all', bookCtrl.readAll);
app.get('/api/users/getId', userCtrl.read);
app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get('/api/readBooks/all', readCtrl.getAll);
app.put('/api/books/:id', bookCtrl.update);
app.delete('/api/books/:id', bookCtrl.remove);
app.delete('/api/carts/:id', cartCtrl.remove);

//port
var nodeport = 8080;
mongoUri = 'localhost: 27017/order'
mongoose.connect(mongoUri, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Connecting to mongo on...", mongoUri);

    app.listen(nodeport, function() {
        console.log('listening on', nodeport)
    });

});

