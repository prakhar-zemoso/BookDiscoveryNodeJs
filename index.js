const express = require('express');
const bodyparser = require('body-parser');
const bookRoute = require('./routes/book');
const authorRoute = require('./routes/author');

const app = express();


app.use(bodyparser.urlencoded({extended: false}))

//it is use to store the data in the array format
app.use(bodyparser.json());

app.use('/book',bookRoute);
app.use('/author',authorRoute);




// --Practicing the course
// app.use('/addProduct',(req, res,next)=>{
//     console.log('I am in the middleware 2');
//     res.send('<form action="/product" method="POST"><input type="text" name = "title"><button type="submit">submit</button></form>');
// });

// app.use('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })


app.listen(3030);

