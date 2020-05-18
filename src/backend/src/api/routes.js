const express = require('express');

function sendEmail() {

    const router = express.Router();

    router.post('/send-email', (req, res, next) => {
        // if (res) {
        //     res.send('POST CALLED');
        //     console.log('%crouter called: ', 'color: #00bfa5', res); 
        // }

        res.send('POST CALLED');

        // next();
    });

    return router;

}

module.exports = { 
    sendEmail
};