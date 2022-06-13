const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('This is the home page');
})


app.get('/info', (req, res) => {
    res.send('This is the info page');
})


app.get('/test', (req, res) => {
    res.send('This is the test page');
})


app.listen(3000, () => {
    console.log('App started on port 3000!');
})