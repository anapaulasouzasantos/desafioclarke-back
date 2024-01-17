const express = require('express');
const { route } = require('./routes/route');
const cors = require('cors');

const app = express();

const corsOptions = {
    Credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions), express.json(), route);

const port = process.env.PORT || 8000

app.listen(port);