var express = require('express');
var router = express.Router();

router.get('/news', function (req, res){
   res.render('error/underconstruction', { menu: { news : true}  });
});

router.get('/events', function (req, res){
   res.render('error/underconstruction', { menu: { events : true}  });
});


module.exports = router;