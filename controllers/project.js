var express = require('express');
var router = express.Router();

router.get('/overview', function (req, res){
   res.render('projects/overview', { menu: { sgv1 : true}  });
});

router.get('/location', function (req, res){
   res.render('error/underconstruction', { menu: { sgv2 : true}  });
});

router.get('/unittype', function (req, res){
   res.render('error/underconstruction', { menu: { sgv3 : true}  });
});

router.get('/service', function (req, res){
   res.render('error/underconstruction', { menu: { sgv4 : true}  });
});

router.get('/price', function (req, res){
   res.render('error/underconstruction', { menu: { sgv5 : true}  });
});

module.exports = router;