var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let sum = 0;
  let more = 0;
  more++;
  sum += more;
  const responseText = `Sum is: ${sum}`;

  res.send('respond with a resource');
});


module.exports = router;
