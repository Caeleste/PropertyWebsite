var express = require('express');
var router = express.Router();


router.get('/company', function (req, res){
   res.render('profile/company', { menu: { profile1 : true}  });
});

router.get('/greetings', function (req, res){
   res.render('error/underconstruction', { menu: { profile2 : true}  });
});

router.get('/history', function (req, res){
   res.render('error/underconstruction', { menu: { profile3 : true}  });
});

router.get('/visions', function (req, res){
   res.render('error/underconstruction', { menu: { profile4 : true}  });
});


module.exports = router;