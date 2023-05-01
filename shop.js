const express = require('express');
const itemRouter = require('./routes');
const app = express();

app.use('/items', itemRouter);

app.listen(3000, function () {
    console.log('App on port 3000');
})