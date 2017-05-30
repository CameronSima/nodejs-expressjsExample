var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. This handler listens to http requests at our root
 ('/') and passes the request and response objects to a function*/
router.get('/', function(req, res, next) {
    
    //Render the view index.hbs with this data object. 
  res.render('index', { title: 'Express', description: "Here's an example of a simple Node.js/Express.js site" });
});

//An example of an external API call. The resulting JSON object is passed in the template the same as in above.
router.get('/posts', function(req, res, next) {
      request({
        url: 'https://jsonplaceholder.typicode.com/posts'
    }, function(err, response, body) {
          
          res.render('posts', { title: 'Some Example data', posts: JSON.parse(body)});
      });
})

module.exports = router;
