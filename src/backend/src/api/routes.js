const express = require('express');

function sendEmail() {

    const router = express.Router();

    router.post('/send-email', (req, res, next) => {
        res.send('POST CALLED');
    });

    return router;

}

module.exports = { 
    sendEmail
};