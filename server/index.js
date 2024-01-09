const express = require('express');
const app = express();
const cors = require('cors');
const port = require('./config/port');
require('./config/mongoDB');

app.use(cors());

// Routes
const urlRoute = require('./routes/url');
const userRoute = require('./routes/user');
const { redirectURL } = require('./controllers/redirectController');


app.use(express.json());
app.use('/url', urlRoute);
app.use('/user', userRoute);
app.get('/:shortId', redirectURL);

app.listen(port, ()=>{
    console.log(`The Server is live at port:${port}`);
})