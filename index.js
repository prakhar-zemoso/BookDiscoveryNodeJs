const express = require('express');
const bodyparser = require('body-parser');
const bookRoute = require('./routes/book');
const authorRoute = require('./routes/author');

const app = express();


app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json());

app.use('/book',bookRoute);
app.use('/author',authorRoute);






app.listen(3030);

