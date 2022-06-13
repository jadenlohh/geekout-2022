const express = require("express");
const { MongoClient, ServerApiVersion, MongoServerError } = require('mongodb');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const router = express.Router();
const uri = "mongodb+srv://Admin:lAf8JiPQynG0mCGm@cluster0.vobnv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


router.get('/login', (req, res) => {
    res.send('This is the login page');

    client.connect(err => {
        const collection = client.db("geekout-2022").collection("credentials");

        collection.findOne({'_id': 'test@gmail.com'}, (err, result) => {
            if (err) throw err;

            var checkPwd = bcrypt.compareSync('Password!23', result.pwd);

            if (checkPwd) {
                console.log('Valid password given!');
            }
            else {
                console.log('Invalid password given!');
            }
        })
    });
})


router.get('/register', (req, res) => {
    res.send('This is the register page');

    client.connect(err => {
        const collection = client.db("geekout-2022").collection("credentials");
        
        var hash = bcrypt.hashSync('Password123', 10);
        var testData = {'_id': 'test@gmail.com', 'pwd': hash};
        
        collection.insertOne(testData, (err, result) => {
            if (MongoServerError && err.message.indexOf('11000')) { console.log('Email already exist!'); }
        });
    });
})


module.exports = router;