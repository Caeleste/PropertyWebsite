var express = require('express');
var router = express.Router();

router.get('/picture', function (req, res){
   res.render('error/underconstruction', { menu: { media1 : true}  });
});

router.get('/video', function (req, res){
   res.render('error/underconstruction', { menu: { media2 : true}  });
});



module.exports = router;