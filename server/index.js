const express = require('express');
//const cors = require('cors');

const app = express();

//const index = require('./routes/index');
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.json({ type: 'application/vnd.api+json' }));
//app.use(cors());
//app.use(index);


app.get('/', function(req,res){
    res.send('Home Page');
})
app.get('/about', function(req,res){
    res.send('About page');
})
var server = app.listen(5001, function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s",host,port)
})