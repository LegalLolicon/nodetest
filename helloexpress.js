var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res){
    res.send('<form method="post">' +
    'Username: <input type="text" name="text1" /><br/>' +
    'Password: <input type="text" name="text2" />' +
    '<input type="submit" value="Login" /><form>');
})

app.post('/', function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form method="post">');
    if (req.body.text1 == 'lolicon' && req.body.text2 == 'legal'){
        res.write('Successful!')
    } else {
        res.write('Failed')
    }
    res.end('<br />Username: <input type="text" name="text1" value="' + req.body.text1 + '" /><br />' + 
    'Password: <input type="text" name="text2" value="' + req.body.text2 + '" />' +
    '<input type="submit" value="Login" /></form>')
})

var server = app.listen(80)