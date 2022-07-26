const express = require('express');
const bodyparser = require('body-parser');
const bookRoute = require('./routes/book');
const authorRoute = require('./routes/author');
const category = require('./Models/category');
const author = require('./Models/author');
const review = require('./Models/review');
const user = require('./Models/User');
const book = require('./Models/book');
const categoryRoute = require('./routes/caregoryRoute');

const sequelize = require('./util/database');

//require('./Models/index')
const app = express();

category.hasMany(book);
author.hasMany(book);
book.hasMany(review);

book.belongsToMany(user,{through:'Book_user'});
user.belongsToMany(book,{through:'Book_user'});




sequelize.sync().then(()=>{
    console.log('Table and model synced successfully');
}).catch(()=>{
    console.log('error')
});


app.use(bodyparser.urlencoded({extended: false}))

//it is use to store the data in the array format
app.use(bodyparser.json());



//app.use('/book',bookRoute);
app.use('/author',authorRoute);
app.use('/category',categoryRoute);




// --Practicing the course
// app.use('/addProduct',(req, res,next)=>{
//     console.log('I am in the middleware 2');
//     res.send('<form action="/product" method="POST"><input type="text" name = "title"><button type="submit">submit</button></form>');
// });

// app.use('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

app.use(express.json());
app.listen(3030);

