const express = require('express');
const app = express();
const path = require('path')


 app.use(express.static('../client'))
 
//Login page
app.get('/', function(req,res){
    res.sendFile(path.resolve('../client/login.html'))
    //res.status(200).send('Login Form');
})
/*****************  Saler Interfaces **************/
// Products Management
//Stock Management
//Statistical Reports
/**************************************************/



/*****************  Viewer Interfaces **************/
// Products Page
app.get('/products', function(req,res){
    res.status(200).send('products page');
})
//Market Page
app.get('/market', function(req,res){
    res.status(200).send('market page');
})
/*************************************************/


/** Handle any other route**/

app.all('*', (req,res) =>{
    res.status(404).send(`<h1> 404 Error: Page not found <h1>`)
})


var server = app.listen(5001, function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s",host,port)
})