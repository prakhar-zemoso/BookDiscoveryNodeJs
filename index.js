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
const reviewRoute = require('./routes/review');
const sequelize = require('./util/database');


//require('./Models/index')
const app = express();


//--1 to Many Relation
category.hasMany(book,{
    foreignKey: 'categoryId',
    as:"book"	
});
book.belongsTo(category,{
    foreignKey:  'categoryId',
    as:"category"	
})


author.hasMany(book,{
    foreignKey: 'authorId',
    as:"book"
});
book.belongsTo(author,{
    foreignKey:  'authorId',
    as:"author"	
})


book.hasMany(review,{
    foreignKey: 'bookId',
    as:'review'
});
review.belongsTo(book,{
    foreignKey:'bookId',
    as:'book'
})

book.belongsToMany(user,{through:'Book_user'});
user.belongsToMany(book,{through:'Book_user'});




sequelize.sync().then(()=>{
    console.log('Table and model synced successfully');
}).catch(()=>{
    console.log('error')
});


app.use(bodyparser.urlencoded({extended: false}))


app.use(bodyparser.json());



app.use('/book',bookRoute);
app.use('/author',authorRoute);
app.use('/category',categoryRoute);

app.use('/review',reviewRoute);





app.use(express.json());
app.listen(3030);

