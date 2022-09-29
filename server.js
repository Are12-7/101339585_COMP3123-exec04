const express = require("express");
const res = require("express/lib/response");

const SERVER_PORT = 8088;

const app = express();

//http://localhost:8088/hello
app.get('/hello', (req, res) => {
    res.send('<h1>GET  - Hello Express Js</h1>');    
})
//Path Parameter
//http://localhost:8088/user/Carlos/Arellano
app.post('/user/:firstname/:lastname', (req, res) => {
    let user = {
        firstname: 'Carlos',
        lastname: 'Arellano'
    }
    //res.send(user);
    res.setHeader('content-type', 'application/json')
        .status(201)
        .send(JSON.stringify(user));

})
//Query Parameter
//http://localhost:8088/user?firstname=Carlos&lastname=Arellano
app.get('/user', (req, res) => {
    res.send(JSON.stringify(req.query));
   
})


app.listen(SERVER_PORT,() => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}/`)
})





