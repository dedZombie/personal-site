const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res, next) => {
    res.send('Hello world!');
});

function sendEmail() {

    router.post('/send-email', (req, res, next) => {
        res.send('POST CALLED');
    });

    return router;

}

function getUsers() {

    router.get('/api/users', (req, res, next) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => res.send(data));
    });

    return router;

}

module.exports = { 
    sendEmail,
    getUsers
};