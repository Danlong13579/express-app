const express = require('express');
const cors = require('cors');

const apodData = require('./mocks/apod.json');

const app = express();
app.use(cors());

app.get('/apod', (req, res) => {
    res.statusCode = 200;
    res.send(apodData);
});

app.listen(3000);