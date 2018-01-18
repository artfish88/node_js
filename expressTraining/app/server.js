const express = require('express');
const bodyParser= require('body-parser');

//TEST MOCK
let arr = [];
let user = {
    username : "username1",
    password : "password1"
};
let user2 = {
    username : "username2",
    password : "password2"
};
arr.push(user);
arr.push(user2);

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var i = 0;

app.use(bodyParser.urlencoded(
    {
        extended: true
    }));

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html')
});

/*app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/sample.html')
});

app.get('/express', function(req, res) {
    res.send('Hello express World')
});*/

var users = ['John', 'Paul', 'Ringo', 'George'];

var getUsers = function(arr) {
    if (i === arr.length) {i = 0;}
    i++;
    return arr[i-1];
};

app.get('/getUser', function(req, res, next) {
    res.send(getUsers(users));
    next()
});

app.post('/addUser', (req, res) => {
    console.log(req.body);
    arr.push(req.body);
    res.send("Ok")
});

app.get('/users', function(req, res) {
    res.send(arr)
});

app.get('/addUser', (req, res) => {
    res.sendFile(__dirname + '/users.html')
});

app.listen(3000, function() {
    console.log('listening on 3000')
});