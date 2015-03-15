var express = require('express');
var app = express();
var swig  = require('swig');

app.set('port', process.env.PORT || 1337);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
app.set('view cache', false);

app.use(express.static(__dirname + '/public'));
swig.setDefaults({ cache: false });

app.get('/', function (req, res){
   res.render('index', { /* template locals context */ });
});

//----------- Profile
app.use('/profile', require('./controllers/profile'));

//----------- Projects Serpong Green Village
app.use('/project', require('./controllers/project'));

/*
app.get('/project/overview', function (req, res){
   res.render('projects/overview', { menu: { sgv1 : true}  });
});
*/
//----------- News & Events
app.use('/article', require('./controllers/article'));

//----------- Media

app.use('/media', require('./controllers/media'));


// custom 404 page 
app.use(function(req, res){
    //res.type('text/plain');
    res.status(404);
    //res.send('404 - Not Found'); 
    res.render('error/page-404', { menu: { profile1 : true}  });
});

// custom 500 page 
app.use(function(err, req, res, next){
    console.error(err.stack);
    //res.type('text/plain');
    res.status(500);
    //res.send('500 - Server Error'); 
    res.render('error/page-500', { /* template locals context */ });
}); 

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
                app.get('port') + ' on ' + '; press Ctrl-C to terminate.' ); 
});