const express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const routes = require('./api/routes');

const _PORT_ = process.env.PORT || 8001;

let app = express();

app.options('*', cors());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'frontend/src')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes.sendEmail())
    .use(routes.getUsers());

app.listen(_PORT_, () => {
    console.log(`Server started at: http://localhost:${_PORT_}`);
    console.log('Cors Enabled');
});