// Filename: api-routes.js
// Initialize express router
var router = require('express').Router();
var userController = require('./controllers/UserController.js');

// Set default API response
router.get('/', function (req, res) {   //getting data from server
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

router.post('/register', userController.register);

router.post('/login', userController.login);

// Export API routes
module.exports = router;

//CRUD: create (post), read (get), update (post or put), delete
