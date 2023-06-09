const express = require('express');
const app = express();
const itemRouter = require('./routes');
const ExpressError = require('./expressError');

app.use(express.json());
app.use('/items', itemRouter);

//404 error
app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
});

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        error: err.message,
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
})