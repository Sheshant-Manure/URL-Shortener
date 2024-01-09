const express = require('express');
const app = express();
const port = require('./config/port');
const urlRoute = require('./routes/url');
require('./config/mongoDB');

app.use('/url', urlRoute);

app.listen(port, ()=>{
    console.log(`The Server is live at port:${port}`);
})