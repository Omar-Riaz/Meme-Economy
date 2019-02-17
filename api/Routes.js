// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
let user = require('./controllers/UserController');

// Set default API response
router.get('/', function (req, res) {   //getting data from server
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

router.post('/user', function (req, res) {    //uploading data - update or creating new data
  // TODO Create a new user and put them in the db
});

//configuring the route
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'secret',
  userProperty: 'payload'   //user
})

//applying the route
//router.get('/profile', auth, prof.profileRead);
router.post('/register', user.register);
// Export API routes
module.exports = router;


//CRUD: create (post), read (get), update (post or put), delete
