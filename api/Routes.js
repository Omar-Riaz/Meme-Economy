// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

router.post('/user', function (req, res) {
  // TODO Create a new user and put them in the db
});

// Export API routes
module.exports = router;
