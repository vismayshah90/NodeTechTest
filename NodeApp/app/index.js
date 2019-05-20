var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var path = require('path');
var debug = require('debug')('app:index');
var app = new express();
//app.set('views', path.join(__dirname, 'views'));
//app.set("view engine","jade");

app.use(cors());
app.use(bodyParser());
/*app.get('/', (req, res) => {
    res.render('default');
})
*/
app.use('/signup', require('../route/signup'));

app.listen(3000, () => {
    debug('Server started on port 3000');
})