var express = require('express')
var router = express.Router();
var path = require('path');
var debug = require('debug')('route:signup');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

router.post('/', (req, res, next) => {
    debug(req.body);
    if(req.body.subscribe === undefined){
       /* res.render('home', {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName
        });
        */
       res.send({
           FirstName: req.body.FirstName,
           LastName: req.body.LastName
       });
    } else {
        res.send({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email
        })
    }
    
    next();
});

router.use('/', (err, req, res, next) => {
    if(err){
        res.send({
            error: err
        });
    }
    next();
})


module.exports = router;